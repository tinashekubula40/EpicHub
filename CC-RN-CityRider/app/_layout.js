import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { withTranslation } from "react-i18next";
import { LogBox, AppState, StatusBar } from "react-native";
import { Stack, useSegments } from "expo-router";
import i18n from "../languages/index"; //don't remove this line
import { useEffect } from "react";

LogBox.ignoreAllLogs();

const MainNavigation = () => {
  const segments = useSegments();

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (_) => {
      StatusBar.setBarStyle("light-content");
    });

    return () => {
      subscription.remove();
    };
  }, [segments]);
  return (
    <Stack screenOptions={{ headerShown: false, animation: "ios_from_right" }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="onboarding/onboardingScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="auth/loginScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="auth/registerScreen" />
      <Stack.Screen name="auth/otpScreen" />
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
      <Stack.Screen name="search/searchScreen" />
      <Stack.Screen name="searchResult/searchResultScreen" />
      <Stack.Screen name="direction/directionScreen" />
      <Stack.Screen name="detail/detailScreen" />
      <Stack.Screen name="securityDeposit/securityDepositScreen" />
      <Stack.Screen name="receipt/receiptScreen" />
      <Stack.Screen name="addMoney/addMoneyScreen" />
      <Stack.Screen
        name="successfullyAddedMoney/successfullyAddedMoneyScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="creditCard/creditCardScreen" />
      <Stack.Screen
        name="success/successScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="ride/rideScreen" />
      <Stack.Screen name="confirm/confirmScreen" />
      <Stack.Screen name="editProfile/editProfileScreen" />
      <Stack.Screen name="rideHistory/rideHistoryScreen" />
      <Stack.Screen name="referAndEarn/referAndEarnScreen" />
      <Stack.Screen name="language/languageScreen" />
      <Stack.Screen name="appSettings/appSettingsScreen" />
      <Stack.Screen name="fAQs/fAQsScreen" />
      <Stack.Screen name="termsAndCondition/termsAndConditionScreen" />
      <Stack.Screen name="privacyPolicy/privacyPolicyScreen" />
      <Stack.Screen name="help/helpScreen" />
    </Stack>
  );
};

const ReloadAppOnLanguageChange = withTranslation("translation", {
  bindI18n: "languageChanged",
  bindStore: false,
})(MainNavigation);

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("../assets/fonts/Mulish-Bold.ttf"),
    SemiBold: require("../assets/fonts/Mulish-SemiBold.ttf"),
    Regular: require("../assets/fonts/Mulish-Regular.ttf"),
    Medium: require("../assets/fonts/Mulish-Medium.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <ReloadAppOnLanguageChange />;
}
