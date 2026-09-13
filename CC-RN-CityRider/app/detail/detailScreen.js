import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import AwesomeButton from "react-native-really-awesome-button";
import { useLocalSearchParams, useNavigation } from "expo-router";

const DetailScreen = () => {
  const navigation = useNavigation();

  const { image } = useLocalSearchParams();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`detailScreen:${key}`);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingVertical: Default.fixPadding * 1.2,
          paddingHorizontal: Default.fixPadding * 2,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Ionicons
              name={isRtl ? "arrow-forward-outline" : "arrow-back-outline"}
              size={25}
              color={Colors.black}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginHorizontal: Default.fixPadding * 1.5,
            }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.Bold18black }}>
              City rider BK2252
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold15grey }}>
              {tr("readyToGo")}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="star" size={22} color={Colors.yellow} />
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Bold16black,
              marginLeft: isRtl ? 0 : Default.fixPadding * 0.3,
              marginRight: isRtl ? Default.fixPadding * 0.3 : 0,
              maxWidth: 50,
            }}
          >
            4.5
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            margin: Default.fixPadding * 2,
          }}
        >
          <Image
            source={image}
            style={{
              resizeMode: "contain",
              width: 234,
              height: 130,
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: isRtl ? 0 : Default.fixPadding,
              marginRight: isRtl ? Default.fixPadding : 0,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: Default.fixPadding * 1.2,
                paddingHorizontal: Default.fixPadding * 0.4,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Image
                source={require("../../assets/images/battery.png")}
                style={{ width: 22, height: 32, resizeMode: "contain" }}
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
                {tr("batteryLevel")}
              </Text>
              <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
                90%
              </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: Default.fixPadding * 1.2,
                paddingHorizontal: Default.fixPadding * 0.5,
                marginTop: Default.fixPadding * 2,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Image
                source={require("../../assets/images/range.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
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
                {tr("rangeUpTo")}
              </Text>
              <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
                30-35 km
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            ...Fonts.SemiBold14grey,
            textAlign: isRtl ? "right" : "left",
            marginTop: Default.fixPadding * 0.5,
            marginBottom: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Fermsvulputate sit tincidunt
          ac euismod. Eget mauris in nasceadipiscing urna amet quam amet. Sem
          faucibus tempus tincidunt tortor aliquam ultrices mollis nunc posuere.
          Sagittis
        </Text>

        <View
          style={{
            paddingHorizontal: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 0.7,
            backgroundColor: Colors.regularGrey,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16black,
            }}
          >
            {tr("rent")}
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingTop: Default.fixPadding * 2,
            paddingBottom: Default.fixPadding * 2.5,
            marginHorizontal: Default.fixPadding * 2,
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
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Bold16primary, overflow: "hidden" }}
            >
              {tr("fixedRent")}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16black,
              }}
            >
              $5.00
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderLeftWidth: 1,
              borderLeftColor: Colors.lightGrey,
              borderRightWidth: 1,
              borderRightColor: Colors.lightGrey,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Bold16primary, overflow: "hidden" }}
            >
              {tr("perKm")}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              $0.50
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
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Bold16primary, overflow: "hidden" }}
            >
              {tr("pauseMin")}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16black,
              }}
            >
              $0.10
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 0.7,
            backgroundColor: Colors.regularGrey,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16black,
            }}
          >
            {tr("parkingRules")}
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginTop: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 1.5,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Image
            source={require("../../assets/images/parking.png")}
            style={{ width: 25, height: 25, resizeMode: "contain" }}
          />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("parkInCity")}
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 1.5,
          }}
        >
          <Image
            source={require("../../assets/images/notPark.png")}
            style={{ width: 25, height: 25, resizeMode: "contain" }}
          />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("doNotPark")}
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          marginHorizontal: Default.fixPadding,
          marginVertical: Default.fixPadding * 2,
        }}
      >
        <View
          style={{
            flex: 1,
            marginHorizontal: Default.fixPadding,
          }}
        >
          <AwesomeButton
            height={50}
            onPress={() =>
              navigation.navigate("(tabs)", { screen: "scan/scanScreen" })
            }
            raiseLevel={0}
            stretch={true}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Bold18white, overflow: "hidden" }}
            >
              {tr("unlockNow")}
            </Text>
          </AwesomeButton>
        </View>

        <TouchableOpacity
          onPress={() => navigation.push("direction/directionScreen")}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: Default.fixPadding,
            borderRadius: 5,
            height: 50,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <Text style={{ ...Fonts.Bold18primary }}>{tr("getDirection")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
