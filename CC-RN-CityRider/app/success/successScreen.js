import React, { useEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from "expo-router";

const SuccessScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  function tr(key) {
    return t(`successScreen:${key}`);
  }

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      navigation.push("(tabs)");
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/ride.png")}
              style={{
                resizeMode: "contain",
                width: 295,
                height: 295,
              }}
            />

            <Text
              style={{
                ...Fonts.Bold25primary,
                marginTop: Default.fixPadding * 4.4,
              }}
            >
              {tr("enjoyYourRide")}
            </Text>
            <Text
              style={{
                ...Fonts.SemiBold18black,
                marginTop: Default.fixPadding * 0.8,
              }}
            >
              {tr("yourBike")}
            </Text>
          </View>
          <View
            style={{
              marginTop: Default.fixPadding * 6,
              marginBottom: Default.fixPadding * 2,
              marginHorizontal: Default.fixPadding * 2,
            }}
          >
            <AwesomeButton
              height={50}
              onPress={() => navigation.push("ride/rideScreen")}
              raiseLevel={0}
              stretch={true}
              borderRadius={5}
              backgroundShadow={Colors.primary}
              backgroundDarker={Colors.primary}
              backgroundColor={Colors.primary}
            >
              <Text style={{ ...Fonts.Bold18white }}>{tr("startRide")}</Text>
            </AwesomeButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SuccessScreen;
