import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/styles";
import MyStatusBar from "../../components/myStatusBar";
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from "expo-router";

const HelpScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`helpScreen:${key}`);
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingVertical: Default.fixPadding * 1.2,
          paddingHorizontal: Default.fixPadding * 2,
        }}
      >
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons
            name={isRtl ? "arrow-forward-outline" : "arrow-back-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...Fonts.Bold18black,
            marginHorizontal: Default.fixPadding * 1.2,
          }}
        >
          {tr("helpSupport")}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: Default.fixPadding * 3.2,
          }}
        >
          <Image
            source={require("../../assets/images/help.png")}
            style={{ width: 225, height: 184, resizeMode: "contain" }}
          />
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
              ...Fonts.Bold16black,
            }}
          >
            {tr("name")}
          </Text>
          <View style={{ ...styles.textInput }}>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder={tr("enterName")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.SemiBold15black,
              }}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16black,
            }}
          >
            {tr("emailAddress")}
          </Text>
          <View style={{ ...styles.textInput }}>
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
                textAlign: isRtl ? "right" : "left",
                ...Fonts.SemiBold15black,
              }}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16black,
            }}
          >
            {tr("message")}
          </Text>

          <View style={{ ...styles.textInput, height: 156 }}>
            <TextInput
              value={message}
              multiline={true}
              numberOfLines={7}
              textAlignVertical="top"
              onChangeText={setMessage}
              placeholder={tr("writeMessageHere")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              style={{
                padding: 0,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.SemiBold15black,
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
              navigation.navigate("(tabs)", {
                screen: "profile/profileScreen",
              });
            }, 1000);
          }}
          raiseLevel={0}
          stretch={true}
          borderRadius={5}
          backgroundShadow={Colors.primary}
          backgroundDarker={Colors.primary}
          backgroundColor={Colors.primary}
        >
          <Text style={{ ...Fonts.Bold18white }}>{tr("submit")}</Text>
        </AwesomeButton>
      </View>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: Default.fixPadding * 1.2,
    paddingHorizontal: Default.fixPadding * 1.5,
    marginTop: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
