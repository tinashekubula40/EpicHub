import React, { useState, useCallback } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  BackHandler,
  Platform,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Default } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import SnackbarToast from "../../components/snackbarToast";
import { useFocusEffect } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { Tabs } from "expo-router";

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      height: 66,
      width: 66,
      borderRadius: 33,
      bottom: Default.fixPadding * 4.7,
    }}
  >
    <View
      style={{
        width: 66,
        height: 32,
        backgroundColor: Colors.transparent,
      }}
    />
    <View
      style={{
        width: 66,
        height: 34,
        backgroundColor: Colors.regularGrey,
      }}
    />
    <View style={styles.circle}>{children}</View>
  </TouchableOpacity>
);

export default function Layout() {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`bottomTab:${key}`);
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
  return (
    <>
      <Tabs
        initialRouteName="home/homeScreen"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: Platform.OS === "ios" ? false : true,
          tabBarStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 68,
            borderTopWidth: null,
            backgroundColor: Colors.white,
            paddingTop: Default.fixPadding * 1.5,
            ...Default.shadow,
          },
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{
                color: Colors.white,
              }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            if (route.name === "home/homeScreen") {
              return (
                <Ionicons
                  name={"home-outline"}
                  size={22}
                  color={focused ? Colors.primary : Colors.grey}
                />
              );
            } else if (route.name === "notification/notificationScreen") {
              return (
                <Ionicons
                  name={"notifications-outline"}
                  size={22}
                  color={focused ? Colors.primary : Colors.grey}
                />
              );
            } else if (route.name === "scan/scanScreen") {
              return (
                <AntDesign name={"scan1"} size={22} color={Colors.white} />
              );
            } else if (route.name === "wallet/walletScreen") {
              return (
                <Ionicons
                  name={"wallet-outline"}
                  size={22}
                  color={focused ? Colors.primary : Colors.grey}
                />
              );
            } else if (route.name === "profile/profileScreen") {
              return (
                <Feather
                  name={"user"}
                  size={22}
                  color={focused ? Colors.primary : Colors.grey}
                />
              );
            }
          },
        })}
      >
        <Tabs.Screen
          name={isRtl ? "profile/profileScreen" : "home/homeScreen"}
        />
        <Tabs.Screen
          name={
            isRtl ? "wallet/walletScreen" : "notification/notificationScreen"
          }
        />
        <Tabs.Screen
          name="scan/scanScreen"
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tabs.Screen
          name={
            isRtl ? "notification/notificationScreen" : "wallet/walletScreen"
          }
        />
        <Tabs.Screen
          name={isRtl ? "home/homeScreen" : "profile/profileScreen"}
        />
      </Tabs>
      <SnackbarToast
        visible={visibleToast}
        title={tr("tapBack")}
        onDismiss={onDismissVisibleToast}
      />
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: 54,
    width: 54,
    borderRadius: 27,
    backgroundColor: Colors.primary,
  },
});
