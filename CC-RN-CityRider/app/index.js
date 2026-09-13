import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import MyStatusBar from "../components/myStatusBar";
import { Colors, Default, Fonts } from "../constants/styles";
import { useNavigation } from "expo-router";

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.push("onboarding/onboardingScreen");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.white,
        }}
      >
        <Image
          source={require("../assets/images/image.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text
          style={{ ...Fonts.SemiBold35primary, marginTop: Default.fixPadding }}
        >
          City rider
        </Text>
      </View>
    </View>
  );
};

export default Index;
