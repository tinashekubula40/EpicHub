import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const SuccessfullyAddedMoneyScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  function tr(key) {
    return t(`successfullyAddedMoneyScreen:${key}`);
  }
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      navigation.push("(tabs)");
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.primary }}>
      <MyStatusBar />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: Default.fixPadding * 5,
        }}
      >
        <Image
          source={require("../../assets/images/success.png")}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
            marginBottom: Default.fixPadding * 4,
          }}
        />
        <Text
          style={{
            ...Fonts.Bold25white,
            marginBottom: Default.fixPadding * 0.5,
          }}
        >
          $100 {tr("added")}
        </Text>
        <Text
          style={{
            ...Fonts.Medium14white,
            textAlign: "center",
            marginBottom: Default.fixPadding * 4,
          }}
        >
          {tr("description")}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.push("(tabs)")}
          style={{
            width: width * 0.7,
            padding: Default.fixPadding * 1.2,
            borderWidth: 1,
            borderColor: Colors.white,
            borderRadius: 10,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Bold16white,
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {tr("backToHome")}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.push("help/helpScreen")}>
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.SemiBold16lightRegularGrey,
            textAlign: "center",
            margin: Default.fixPadding,
          }}
        >
          {tr("needHelp")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessfullyAddedMoneyScreen;
