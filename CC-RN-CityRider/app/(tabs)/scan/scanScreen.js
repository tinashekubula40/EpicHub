import {
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../../constants/styles";
import BarcodeMask from "react-native-barcode-mask";
import { useNavigation } from "expo-router";

const { height } = Dimensions.get("window");

const ScanScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`scanScreen:${key}`);
  }

  const [code, setCode] = useState();

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 1.2,
          }}
        >
          <Text style={{ ...Fonts.Bold22black }}>{tr("scanUnlock")}</Text>
          <Text
            style={{
              ...Fonts.Bold16grey,
              textAlign: "center",
              marginTop: Default.fixPadding * 0.3,
              marginHorizontal: Default.fixPadding * 5,
            }}
          >
            {tr("scanQr")}
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          <View style={{ margin: Default.fixPadding * 2 }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.push("securityDeposit/securityDepositScreen")
              }
            >
              <ImageBackground
                borderRadius={5}
                source={require("../../../assets/images/scanImage.png")}
                style={{ width: "100%", height: height / 2 }}
              >
                <BarcodeMask
                  width={250}
                  height={250}
                  edgeWidth={50}
                  edgeHeight={50}
                  edgeColor={Colors.white}
                  edgeBorderWidth={8}
                  animatedLineHeight={5}
                  edgeRadius={30}
                  animatedLineColor={Colors.primary}
                  backgroundColor={Colors.transparent}
                />
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                ...Fonts.Bold16black,
                textAlign: "center",
                marginTop: Default.fixPadding * 2,
              }}
            >
              {tr("havingIssue")}
            </Text>

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginHorizontal: Default.fixPadding * 2,
                marginTop: Default.fixPadding * 2,
                marginBottom: Default.fixPadding * 4,
              }}
            >
              <View
                style={{
                  padding: Default.fixPadding * 1.2,
                  borderRadius: 10,
                  backgroundColor: Colors.white,
                  ...Default.shadow,
                  flex: 1,
                }}
              >
                <TextInput
                  value={code}
                  onChangeText={setCode}
                  placeholder={tr("enterCodeManually")}
                  placeholderTextColor={Colors.grey}
                  selectionColor={Colors.primary}
                  numberOfLines={1}
                  style={{
                    padding: 0,
                    ...Fonts.Bold16black,
                    textAlign: isRtl ? "right" : "left",
                  }}
                />
              </View>

              <View
                style={{
                  marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
                  marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: Colors.white,
                    ...Default.shadow,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/flash.png")}
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ScanScreen;
