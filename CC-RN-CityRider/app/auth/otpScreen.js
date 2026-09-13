import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import AwesomeButton from "react-native-really-awesome-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { OtpInput } from "react-native-otp-entry";
import { useNavigation } from "expo-router";

const OtpScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`otpScreen:${key}`);
  }

  const [timer, setTimer] = useState(59);
  const [intervalStop, setIntervalStop] = useState(true);

  const intervalRef = useRef();

  useEffect(() => {
    if (intervalStop) {
      intervalRef.current = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(intervalRef.current);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer, intervalStop]);

  const formatSecondsToTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleTextChange = (otp) => {
    if (otp.length === 4) {
      setIntervalStop(false);
      navigation.push("(tabs)");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <TouchableOpacity
        onPress={() => {
          setIntervalStop(false);
          navigation.pop();
        }}
        style={{
          alignSelf: isRtl ? "flex-end" : "flex-start",
          marginVertical: Default.fixPadding * 1.2,
          marginHorizontal: Default.fixPadding * 2,
        }}
      >
        <Ionicons
          name={isRtl ? "arrow-forward-outline" : "arrow-back-outline"}
          size={25}
          color={Colors.black}
        />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: Default.fixPadding * 3.5,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text style={{ ...Fonts.Bold22black }}>{tr("verification")}</Text>
          <Text
            style={{
              ...Fonts.SemiBold15grey,
              textAlign: "center",
              marginTop: Default.fixPadding * 2,
            }}
          >
            {tr("confirmationCode")}
            {` ${tr("mobileNumber")} +91 1234567890`}
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 6,
            marginVertical: Default.fixPadding * 5,
          }}
        >
          <OtpInput
            numberOfDigits={4}
            onTextChange={handleTextChange}
            theme={{
              pinCodeContainerStyle: {
                borderWidth: 1,
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              },
              pinCodeTextStyle: { ...Fonts.Medium22darkPrimary },
              focusedPinCodeContainerStyle: {
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              },
              focusStickStyle: { backgroundColor: Colors.primary },
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            paddingHorizontal: Default.fixPadding * 2.8,
            paddingVertical: Default.fixPadding * 0.6,
            borderRadius: 10,
            backgroundColor: Colors.extraLightGrey,
          }}
        >
          <Text style={{ ...Fonts.SemiBold14primary }}>
            {formatSecondsToTime(timer)}
          </Text>
        </View>

        <View
          style={{
            marginTop: Default.fixPadding * 4,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <AwesomeButton
            progress
            height={50}
            progressLoadingTime={1500}
            onPress={(next) => {
              setIntervalStop(false);
              setTimeout(() => {
                next();
                navigation.push("(tabs)");
              }, 1500);
            }}
            raiseLevel={0}
            stretch={true}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text style={{ ...Fonts.Bold18white }}>{tr("verify")}</Text>
          </AwesomeButton>
        </View>

        <Text
          style={{
            ...Fonts.SemiBold14black,
            textAlign: "center",
            marginVertical: Default.fixPadding * 1.5,
          }}
        >
          {tr("didGet")}
          <Text
            onPress={() => {
              if (timer === 0) {
                setTimer(59);
              }
            }}
            style={{ ...Fonts.Bold14primary }}
          >{` ${tr("resend")}`}</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default OtpScreen;
