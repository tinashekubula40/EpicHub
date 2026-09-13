import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import AwesomeButton from "react-native-really-awesome-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "expo-router";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`registerScreen:${key}`);
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <TouchableOpacity
        onPress={() => navigation.pop()}
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
            marginTop: Default.fixPadding * 0.8,
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
            {tr("register")}
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
            marginTop: Default.fixPadding * 3,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("name")}
          </Text>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              ...styles.textInputCard,
            }}
          >
            <Feather name="user" color={Colors.grey} size={18} />
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder={tr("enterName")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                ...Fonts.SemiBold16black,
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 1.2,
              }}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("emailAddress")}
          </Text>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              ...styles.textInputCard,
            }}
          >
            <Feather name="mail" color={Colors.grey} size={18} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder={tr("enterEmailAddress")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                ...Fonts.SemiBold16black,
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 1.2,
              }}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("mobileNumber")}
          </Text>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              ...styles.textInputCard,
            }}
          >
            <Feather name="smartphone" color={Colors.grey} size={18} />
            <TextInput
              value={number}
              onChangeText={setNumber}
              keyboardType="number-pad"
              placeholder={tr("enterMobileNumber")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                ...Fonts.SemiBold16black,
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 1.2,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          margin: Default.fixPadding * 2,
        }}
      >
        <AwesomeButton
          progress
          height={50}
          progressLoadingTime={1000}
          onPress={(next) => {
            setTimeout(() => {
              next();
              navigation.push("auth/otpScreen");
            }, 1000);
          }}
          raiseLevel={0}
          stretch={true}
          borderRadius={5}
          backgroundShadow={Colors.primary}
          backgroundDarker={Colors.primary}
          backgroundColor={Colors.primary}
        >
          <Text style={{ ...Fonts.Bold18white }}>{tr("register")}</Text>
        </AwesomeButton>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  textInputCard: {
    alignItems: "center",
    paddingVertical: Default.fixPadding * 1.2,
    paddingHorizontal: Default.fixPadding,
    marginTop: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
