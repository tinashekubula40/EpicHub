import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/styles";
import MyStatusBar from "../../components/myStatusBar";
import ToggleSwitch from "toggle-switch-react-native";
import { useNavigation } from "expo-router";

const AppSettingsScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`appSettingsScreen:${key}`);
  }

  const [notification, setNotification] = useState(true);
  const switchNotification = () =>
    setNotification((notification) => !notification);

  const [update, setUpdate] = useState(true);
  const switchUpdate = () => setUpdate((update) => !update);

  const [policyAndCommunity, setPolicyAndCommunity] = useState(false);
  const switchPolicyAndCommunity = () =>
    setPolicyAndCommunity((policyAndCommunity) => !policyAndCommunity);

  const [darkMode, setDarkMode] = useState(false);
  const switchDarkMode = () => setDarkMode((dark) => !dark);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingTop: Default.fixPadding * 1.2,
          paddingBottom: Default.fixPadding,
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
          {tr("appSettings")}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: Default.fixPadding,
            marginBottom: Default.fixPadding * 3,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Bold16black,
              }}
            >
              {tr("allowNotification")}
            </Text>
            <ToggleSwitch
              size="medium"
              isOn={notification}
              onColor={Colors.primary}
              offColor={Colors.lightGrey}
              onToggle={switchNotification}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginTop: Default.fixPadding * 0.6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing Senectus
            pellentesque justo, quis varius dictumst
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Bold16black,
              }}
            >
              {tr("applicationUpdate")}
            </Text>
            <ToggleSwitch
              size="medium"
              isOn={update}
              onColor={Colors.primary}
              offColor={Colors.lightGrey}
              onToggle={switchUpdate}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginTop: Default.fixPadding * 0.6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing Senectus
            pellentesque justo, quis varius dictumst
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Bold16black,
              }}
            >
              {tr("policyCommunity")}
            </Text>
            <ToggleSwitch
              size="medium"
              isOn={policyAndCommunity}
              onColor={Colors.primary}
              offColor={Colors.lightGrey}
              onToggle={switchPolicyAndCommunity}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginTop: Default.fixPadding * 0.6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing Senectus
            pellentesque justo, quis varius dictumst
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Bold16black,
              }}
            >
              {tr("darkMode")}
            </Text>
            <ToggleSwitch
              size="medium"
              isOn={darkMode}
              onColor={Colors.primary}
              offColor={Colors.lightGrey}
              onToggle={switchDarkMode}
            />
          </View>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginTop: Default.fixPadding * 0.6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing Senectus
            pellentesque justo, quis varius dictumst
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppSettingsScreen;
