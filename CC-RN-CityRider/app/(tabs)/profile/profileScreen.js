import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../../constants/styles";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LogoutModal from "../../../components/logoutModal";
import { useNavigation } from "expo-router";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`profileScreen:${key}`);
  }

  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const profileList = [
    {
      key: "1",
      title: tr("rideHistory"),
      icon: Ionicons,
      iconName: "bicycle-sharp",
      navigateTo: "rideHistory/rideHistoryScreen",
    },
    {
      key: "2",
      title: tr("referEarn"),
      icon: Ionicons,
      iconName: "people-outline",
      navigateTo: "referAndEarn/referAndEarnScreen",
    },
    {
      key: "3",
      title: tr("language"),
      icon: Ionicons,
      iconName: "globe-outline",
      navigateTo: "language/languageScreen",
    },
    {
      key: "4",
      title: tr("appSettings"),
      icon: Ionicons,
      iconName: "settings-outline",
      navigateTo: "appSettings/appSettingsScreen",
    },
    {
      key: "5",
      title: tr("fAQs"),
      icon: Ionicons,
      iconName: "chatbubbles-outline",
      navigateTo: "fAQs/fAQsScreen",
    },
    {
      key: "6",
      title: tr("privacyPolicy"),
      icon: Octicons,
      iconName: "shield",
      navigateTo: "privacyPolicy/privacyPolicyScreen",
    },
    {
      key: "7",
      title: tr("termsCondition"),
      icon: MaterialIcons,
      iconName: "list-alt",
      navigateTo: "termsAndCondition/termsAndConditionScreen",
    },
    {
      key: "8",
      title: tr("helpSupport"),
      icon: FontAwesome,
      iconName: "question-circle-o",
      navigateTo: "help/helpScreen",
    },
    {
      key: "9",
      title: tr("logout"),
      icon: Feather,
      iconName: "log-out",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: Default.fixPadding * 1.2,
        }}
      >
        <Text style={{ ...Fonts.Bold20black }}>{tr("profile")}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginTop: Default.fixPadding * 0.8,
            marginBottom: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 54,
                height: 54,
                borderRadius: 27,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Image
                source={require("../../../assets/images/profile.png")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: isRtl ? "flex-end" : "flex-start",
                marginHorizontal: Default.fixPadding,
              }}
            >
              <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
                Leslie Alexander
              </Text>
              <Text numberOfLines={1} style={{ ...Fonts.SemiBold14grey }}>
                lesliealexander@mail.com
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.push("editProfile/editProfileScreen")}
          >
            <Feather name="edit" size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingVertical: Default.fixPadding * 1.7,
            paddingHorizontal: Default.fixPadding,
            marginBottom: Default.fixPadding * 2,
            backgroundColor: Colors.regularGrey,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingRight: isRtl ? 0 : Default.fixPadding,
              paddingLeft: isRtl ? Default.fixPadding : 0,
            }}
          >
            <Image
              source={require("../../../assets/images/bicycle.png")}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16primary,
                overflow: "hidden",
                marginTop: Default.fixPadding,
                marginBottom: Default.fixPadding * 0.4,
              }}
            >
              {tr("rideTaken")}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              40 Ride
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: Default.fixPadding,
              borderRightWidth: 1,
              borderRightColor: Colors.lightGrey,
              borderLeftWidth: 1,
              borderLeftColor: Colors.lightGrey,
            }}
          >
            <Ionicons name="navigate" size={40} color={Colors.primary} />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16primary,
                overflow: "hidden",
                marginTop: Default.fixPadding,
                marginBottom: Default.fixPadding * 0.4,
              }}
            >
              {tr("distance")}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              90.45 km
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: isRtl ? 0 : Default.fixPadding,
              paddingRight: isRtl ? Default.fixPadding : 0,
            }}
          >
            <Image
              source={require("../../../assets/images/fire.png")}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16primary,
                overflow: "hidden",
                marginTop: Default.fixPadding,
                marginBottom: Default.fixPadding * 0.4,
              }}
            >
              {tr("calories")}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              1050 Kcal
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: Default.fixPadding * 1.8,
            backgroundColor: Colors.regularGrey,
            paddingBottom: Default.fixPadding * 2,
          }}
        >
          {profileList.map((item, index) => {
            const lastItem = index === profileList.length - 1;
            return (
              <TouchableOpacity
                key={item.key}
                activeOpacity={0.7}
                onPress={() => {
                  if (lastItem) {
                    setOpenLogoutModal(true);
                  } else {
                    navigation.push(item.navigateTo);
                  }
                }}
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginBottom: Default.fixPadding * 2.5,
                  marginHorizontal: Default.fixPadding * 2,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: isRtl ? "row-reverse" : "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: Colors.white,
                      ...Default.shadow,
                    }}
                  >
                    <item.icon
                      name={item.iconName}
                      size={20}
                      color={lastItem ? Colors.red : Colors.primary}
                    />
                  </View>

                  <Text
                    numberOfLines={1}
                    style={{
                      flex: 1,
                      textAlign: isRtl ? "right" : "left",
                      ...(lastItem ? Fonts.Bold16red : Fonts.Bold16black),
                      marginHorizontal: Default.fixPadding,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>

                {lastItem ? null : (
                  <Ionicons
                    name={isRtl ? "chevron-back" : "chevron-forward-outline"}
                    size={20}
                    color={Colors.black}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <LogoutModal
        visible={openLogoutModal}
        closeLogoutModal={() => setOpenLogoutModal(false)}
        onLogoutHandler={() => {
          setOpenLogoutModal(false);
          navigation.push("auth/loginScreen");
        }}
      />
    </View>
  );
};

export default ProfileScreen;
