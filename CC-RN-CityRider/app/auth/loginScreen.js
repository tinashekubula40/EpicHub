import {
  Text,
  View,
  Image,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState, useCallback } from "react";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import SnackbarToast from "../../components/snackbarToast";
import AwesomeButton from "react-native-really-awesome-button";
import IntlPhoneInput from "react-native-intl-phone-input";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const LoginScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`loginScreen:${key}`);
  }

  const [visibleToast, setVisibleToast] = useState(false);
  const onDismissVisibleToast = () => setVisibleToast(false);

  const [exitApp, setExitApp] = useState(0);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (Platform.OS === "android") {
          setTimeout(() => {
            setExitApp(0);
          }, 2000);

          if (exitApp === 0) {
            setExitApp(exitApp + 1);
            setVisibleToast(true);
          } else if (exitApp === 1) {
            BackHandler.exitApp();
          }
          return true;
        }
      };
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, [exitApp])
  );

  const [agreeCondition, setAgreeCondition] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: Default.fixPadding * 5,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Image
            source={require("../../assets/images/image2.png")}
            style={{ width: 206, height: 162, resizeMode: "contain" }}
          />

          <Text
            style={{
              ...Fonts.Bold22darkPrimary,
              marginTop: Default.fixPadding * 2.5,
            }}
          >
            {tr("rideCityRider")}
          </Text>

          <Text
            style={{
              ...Fonts.Bold22black,
              marginTop: Default.fixPadding * 5,
            }}
          >
            {tr("login")}
          </Text>
          <Text
            style={{
              ...Fonts.Bold15grey,
              textAlign: "center",
              marginTop: Default.fixPadding,
            }}
          >
            {tr("welcomeBack")}
          </Text>
        </View>

        <View
          style={{
            marginTop: Default.fixPadding * 4,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("mobileNumber")}
          </Text>

          <IntlPhoneInput
            defaultCountry="IN"
            closeText={tr("close")}
            filterText={tr("search")}
            placeholder={tr("enterMobileNumber")}
            placeholderTextColor={Colors.grey}
            modalCountryItemCountryNameStyle={{ ...Fonts.SemiBold16black }}
            flagStyle={{
              fontSize: 25,
            }}
            closeButtonStyle={{
              ...Fonts.SemiBold16black,
            }}
            inputProps={{ selectionColor: Colors.primary }}
            dialCodeTextStyle={{
              ...Fonts.SemiBold16black,
            }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: Default.fixPadding,
              marginBottom: Default.fixPadding * 0.5,
              borderRadius: 10,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
            phoneInputStyle={{
              padding: 0,
              ...Fonts.SemiBold16black,
              textAlign: isRtl ? "right" : "left",
              paddingHorizontal: isRtl ? 0 : Default.fixPadding * 1.2,
              borderLeftWidth: 2,
              borderLeftColor: Colors.lightGrey,
            }}
          />
          <TouchableOpacity
            onPress={() => setAgreeCondition(!agreeCondition)}
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginRight: isRtl ? 0 : Default.fixPadding * 2,
              marginLeft: isRtl ? Default.fixPadding * 2 : 0,
            }}
          >
            <Ionicons
              name={agreeCondition ? "stop-outline" : "checkbox"}
              size={18}
              color={agreeCondition ? Colors.grey : Colors.primary}
            />
            <Text
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Bold12grey,
                marginLeft: isRtl ? 0 : Default.fixPadding,
                marginRight: isRtl ? Default.fixPadding : 0,
              }}
            >
              {tr("byContinuing")}

              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Bold12primary,
                }}
              >
                {` ${tr("termsCondition")} `}
              </Text>

              {tr("rider")}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginVertical: Default.fixPadding * 4,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <AwesomeButton
            progress
            height={50}
            progressLoadingTime={1000}
            onPress={(next) => {
              setTimeout(() => {
                next();
                navigation.push("auth/registerScreen");
              }, 1000);
            }}
            raiseLevel={0}
            stretch={true}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text style={{ ...Fonts.Bold18white }}>{tr("login")}</Text>
          </AwesomeButton>
        </View>
      </ScrollView>
      <SnackbarToast
        visible={visibleToast}
        title={tr("tapBack")}
        onDismiss={onDismissVisibleToast}
      />
    </View>
  );
};

export default LoginScreen;
