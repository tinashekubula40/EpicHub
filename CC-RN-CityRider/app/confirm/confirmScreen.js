import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DashedLine from "react-native-dashed-line";
import AwesomeButton from "react-native-really-awesome-button";
import GiveRateBottomSheet from "../../components/giveRateBottomSheet";
import { useNavigation } from "expo-router";

const ConfirmScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`confirmScreen:${key}`);
  }

  const [openRateBottomSheet, setOpenRateBottomSheet] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingVertical: Default.fixPadding * 1.2,
          paddingHorizontal: Default.fixPadding * 2,
        }}
      >
        <View
          style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
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
              marginTop: Default.fixPadding * 1.7,
            }}
          >
            {tr("rideEnded")}
          </Text>
          <Text
            style={{
              ...Fonts.Bold14primary,
              marginTop: Default.fixPadding * 0.5,
            }}
          >
            City rider BK2252
          </Text>
        </View>

        <Image
          source={require("../../assets/images/pic7.png")}
          style={{ width: 170, height: 95, resizeMode: "contain" }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 1.5,
            backgroundColor: Colors.regularGrey,
          }}
        >
          <Text style={{ ...Fonts.Bold16green }}>{tr("burned")} 110 Kcal</Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingTop: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding,
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
              source={require("../../assets/images/clock2.png")}
              style={{ width: 32, height: 32, resizeMode: "contain" }}
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
              {tr("rideTime")}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              09 : 12 min
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: Default.fixPadding,
              borderLeftWidth: 1,
              borderLeftColor: Colors.lightGrey,
              borderRightWidth: 1,
              borderRightColor: Colors.lightGrey,
            }}
          >
            <Image
              source={require("../../assets/images/timer.png")}
              style={{ width: 32, height: 32, resizeMode: "contain" }}
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
              {tr("pauseTime")}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              01 : 15 min
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
            <Ionicons name="navigate" size={32} color={Colors.primary} />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16primary,
                overflow: "hidden",
                marginTop: Default.fixPadding,
                marginBottom: Default.fixPadding * 0.4,
              }}
            >
              {tr("traveled")}
            </Text>
            <Text style={{ ...Fonts.Bold16black }}>3.5km</Text>
          </View>
        </View>

        <DashedLine
          dashGap={2}
          dashLength={2}
          dashThickness={1.5}
          dashColor={Colors.primary}
        />

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            margin: Default.fixPadding * 2,
          }}
        >
          <View style={{ flex: 1.3 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: Colors.regularGrey,
              }}
            >
              <MaterialIcons
                name="location-on"
                size={25}
                color={Colors.primary}
              />
            </View>

            <Image
              source={require("../../assets/images/line.png")}
              style={{ alignSelf: "center", height: 61 }}
            />

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: Colors.regularGrey,
              }}
            >
              <Ionicons name="navigate" size={22} color={Colors.primary} />
            </View>
          </View>
          <View
            style={{
              flex: 8.7,
              marginHorizontal: Default.fixPadding * 1.5,
            }}
          >
            <View style={{ alignItems: isRtl ? "flex-end" : "flex-start" }}>
              <Text style={{ ...Fonts.Bold16primary }}>
                {tr("pickLocation")}
              </Text>
              <Text style={{ ...Fonts.SemiBold14black }}>
                6391 Elgin St. Celina, Delaware 10299
              </Text>
              <Text style={{ ...Fonts.SemiBold14grey }}>06 : 36 pm</Text>
            </View>

            <View
              style={{
                alignItems: isRtl ? "flex-end" : "flex-start",
                marginTop: Default.fixPadding * 4.5,
              }}
            >
              <Text style={{ ...Fonts.Bold16primary }}>
                {tr("pickLocation")}
              </Text>
              <Text style={{ ...Fonts.SemiBold14black }}>
                6391 Elgin St. Celina, Delaware 10299
              </Text>
              <Text style={{ ...Fonts.SemiBold14grey }}>06 : 36 pm</Text>
            </View>
          </View>
        </View>

        <DashedLine
          dashGap={2}
          dashLength={2}
          dashThickness={1.5}
          dashColor={Colors.primary}
        />

        <View style={{ margin: Default.fixPadding * 2 }}>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: Default.fixPadding * 1.5,
            }}
          >
            <Text style={{ ...Fonts.Bold16grey }}>{tr("fixedRent")}</Text>
            <Text style={{ ...Fonts.SemiBold16black }}>$5.00</Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: Default.fixPadding * 1.5,
            }}
          >
            <Text style={{ ...Fonts.Bold16grey }}>{tr("rideFare")}</Text>
            <Text style={{ ...Fonts.SemiBold16black }}>$4.00</Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: Default.fixPadding * 1.5,
            }}
          >
            <Text style={{ ...Fonts.Bold16grey }}>{tr("pauseFare")}</Text>
            <Text style={{ ...Fonts.SemiBold16black }}>$0.40</Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ ...Fonts.Bold16primary }}>
              {tr("paidFromWallet")}
            </Text>
            <Text style={{ ...Fonts.Bold16primary }}>$9.40</Text>
          </View>
        </View>

        <DashedLine
          dashGap={2}
          dashLength={2}
          dashThickness={1.5}
          dashColor={Colors.primary}
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: Default.fixPadding * 3,
          }}
        >
          <Text style={{ ...Fonts.Bold16black }}>{tr("question")}</Text>
          <Text style={{ ...Fonts.Bold16black }}>{tr("shareExperience")}</Text>
        </View>
      </ScrollView>

      <View
        style={{
          margin: Default.fixPadding * 2,
        }}
      >
        <AwesomeButton
          height={50}
          onPress={() => setOpenRateBottomSheet(true)}
          raiseLevel={0}
          stretch={true}
          borderRadius={5}
          backgroundShadow={Colors.primary}
          backgroundDarker={Colors.primary}
          backgroundColor={Colors.primary}
        >
          <Text style={{ ...Fonts.Bold18white }}>{tr("giveRate")}</Text>
        </AwesomeButton>
      </View>

      <GiveRateBottomSheet
        visible={openRateBottomSheet}
        closeBottomSheet={() => setOpenRateBottomSheet(false)}
        onSubmitHandler={() => {
          setOpenRateBottomSheet(false);
          navigation.push("(tabs)");
        }}
      />
    </View>
  );
};

export default ConfirmScreen;
