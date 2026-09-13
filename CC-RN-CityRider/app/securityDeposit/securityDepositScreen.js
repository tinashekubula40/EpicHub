import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from "expo-router";

const SecurityDepositScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`securityDepositScreen:${key}`);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <View
        style={{
          alignSelf: isRtl ? "flex-end" : "flex-start",
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
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ ...Fonts.Bold40primary }}>$50</Text>
            <Text
              style={{
                ...Fonts.Bold20black,
                marginTop: Default.fixPadding * 2,
              }}
            >
              {tr("securityDeposit")}
            </Text>
            <Text
              style={{
                ...Fonts.SemiBold15grey,
                textAlign: "center",
                marginTop: Default.fixPadding * 0.5,
              }}
            >
              {tr("description")}
            </Text>
          </View>
          <View
            style={{
              marginTop: Default.fixPadding * 4.5,
            }}
          >
            <AwesomeButton
              height={50}
              onPress={() =>
                navigation.push("creditCard/creditCardScreen", { key: "2" })
              }
              raiseLevel={0}
              stretch={true}
              borderRadius={5}
              backgroundShadow={Colors.primary}
              backgroundDarker={Colors.primary}
              backgroundColor={Colors.primary}
            >
              <Text style={{ ...Fonts.Bold18white }}>{tr("payNow")}</Text>
            </AwesomeButton>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignSelf: "center",
              marginVertical: Default.fixPadding * 2,
            }}
          >
            <Text style={{ ...Fonts.Bold16primary }}>{tr("later")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecurityDepositScreen;
