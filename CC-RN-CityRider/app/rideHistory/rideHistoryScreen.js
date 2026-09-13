import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/styles";
import MyStatusBar from "../../components/myStatusBar";
import DashedLine from "react-native-dashed-line";
import GiveRateBottomSheet from "../../components/giveRateBottomSheet";
import { useNavigation } from "expo-router";

const RideHistoryScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`rideHistoryScreen:${key}`);
  }

  const [openRateBottomSheet, setOpenRateBottomSheet] = useState(false);

  const rideHistoryList = [
    {
      key: "1",
      name: "City ride BK2545",
      image: require("../../assets/images/pic1.png"),
      dateTime: "5 aug 2022, 05 : 49 pm ",
      km: "3.5 km",
      min: "10.36 min",
      price: "$15.50",
    },
    {
      key: "2",
      name: "City ride KG5689",
      image: require("../../assets/images/pic2.png"),
      dateTime: "6 aug 2022, 04 : 49 pm ",
      km: "3.5 km",
      min: "10.36 min",
      price: "$15.50",
    },
    {
      key: "3",
      name: "City ride BK2545",
      image: require("../../assets/images/pic3.png"),
      dateTime: "8 aug 2022, 05 : 49 pm ",
      km: "1.5 km",
      min: "4.36 min",
      price: "$09.45",
    },
    {
      key: "4",
      name: "City ride BK1245",
      image: require("../../assets/images/pic4.png"),
      dateTime: "10 aug 2022, 05 : 49 pm ",
      km: "3.2 km",
      min: "9.36 min",
      price: "$15.45",
    },
    {
      key: "5",
      name: "City ride KG5648",
      image: require("../../assets/images/pic1.png"),
      dateTime: "12 aug 2022, 02 : 15 pm ",
      km: "4.5 km",
      min: "60.00 min",
      price: "$50.10",
    },
    {
      key: "6",
      name: "City ride BK2545",
      image: require("../../assets/images/pic2.png"),
      dateTime: "14 aug 2022, 05 : 49 pm ",
      km: "2.5 km",
      min: "8.36 min",
      price: "$12.50",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.push("confirm/confirmScreen")}
        style={{
          marginBottom: Default.fixPadding * 2,
          marginHorizontal: Default.fixPadding * 2,
          borderRadius: 10,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            padding: Default.fixPadding,
          }}
        >
          <Image
            source={item.image}
            style={{ width: 135, height: 75, resizeMode: "contain" }}
          />

          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginLeft: isRtl ? 0 : Default.fixPadding * 2,
              marginRight: isRtl ? Default.fixPadding * 2 : 0,
            }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.Bold14grey }}>
              {item.dateTime}
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
            }}
          >
            <View style={{ flex: 7.5 }}>
              <DashedLine
                dashGap={2}
                dashLength={2}
                dashThickness={1}
                dashColor={Colors.grey}
              />

              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.SemiBold14black,
                  paddingVertical: Default.fixPadding * 0.9,
                  paddingHorizontal: Default.fixPadding * 2,
                }}
              >
                {`${item.km} | ${item.min} | ${item.min}`}
              </Text>
            </View>

            <View style={{ flex: 2.5 }}>
              <TouchableOpacity
                onPress={() => setOpenRateBottomSheet(true)}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: Default.fixPadding,
                  backgroundColor: Colors.primary,
                  borderBottomRightRadius: isRtl ? 0 : 10,
                  borderBottomLeftRadius: isRtl ? 10 : 0,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{ ...Fonts.Bold14white, overflow: "hidden" }}
                >
                  {tr("giveRate")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
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
          {tr("rideHistory")}
        </Text>
      </View>

      <FlatList
        data={rideHistoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: Default.fixPadding }}
      />

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

export default RideHistoryScreen;
