import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import DashedLine from "react-native-dashed-line";
import { useNavigation } from "expo-router";

const SearchResultScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`searchResultScreen:${key}`);
  }

  const scootersList = [
    {
      key: "1",
      image: require("../../assets/images/pic1.png"),
      address: "6391 Elgin St. Celina, Mumbai ,Maharashtra",
      timeAndKm: "15 min/2.5 km",
      scootersAvailable: "5",
      battery: "90%",
      range: "30-35 km",
    },
    {
      key: "2",
      image: require("../../assets/images/pic2.png"),
      address: "8502 Preston Road, Mumbai ,Maharashtra",
      timeAndKm: "30 min/3.5 km",
      scootersAvailable: "10",
      battery: "90%",
      range: "30-35 km",
    },
    {
      key: "3",
      image: require("../../assets/images/pic3.png"),
      address: "4140, Parker road,Mumbai ,Maharashtra",
      timeAndKm: "25 min/1.5 km",
      scootersAvailable: "6",
      battery: "90%",
      range: "30-35 km",
    },
    {
      key: "4",
      image: require("../../assets/images/pic4.png"),
      address: "1901, Thornridge Cir, Mumbai ,Maharashtra",
      timeAndKm: "15 min/2.5 km",
      scootersAvailable: "8",
      battery: "90%",
      range: "30-35 km",
    },
    {
      key: "5",
      image: require("../../assets/images/pic1.png"),
      address: "6391 Elgin St. Celina, Mumbai ,Maharashtra",
      timeAndKm: "15 min/2.5 km",
      scootersAvailable: "5",
      battery: "90%",
      range: "30-35 km",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginHorizontal: Default.fixPadding * 2,
          marginBottom: Default.fixPadding * 2,
          borderRadius: 10,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            paddingVertical: Default.fixPadding * 0.6,
            paddingHorizontal: Default.fixPadding,
          }}
        >
          <Image
            source={item.image}
            style={{
              resizeMode: "stretch",
              width: 150,
              height: 90,
            }}
          />

          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginLeft: isRtl ? 0 : Default.fixPadding * 2.5,
              marginRight: isRtl ? Default.fixPadding * 2.5 : 0,
            }}
          >
            <Text
              numberOfLines={2}
              style={{ ...Fonts.Bold15black, overflow: "hidden" }}
            >
              {item.address}
            </Text>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginVertical: Default.fixPadding * 0.2,
              }}
            >
              <Feather name="clock" size={15} color={Colors.grey} />
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.SemiBold14grey,
                  marginHorizontal: Default.fixPadding * 0.3,
                }}
              >
                {item.timeAndKm}
              </Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold15primary,
                overflow: "hidden",
              }}
            >
              {`${item.scootersAvailable} ${tr("scootersAvailable")}`}
            </Text>
          </View>
        </View>
        <DashedLine
          dashGap={2}
          dashLength={2}
          dashThickness={1}
          dashColor={Colors.grey}
        />

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingVertical: Default.fixPadding,
            paddingHorizontal: Default.fixPadding * 1.5,
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
                paddingRight: isRtl ? 0 : Default.fixPadding,
                paddingLeft: isRtl ? Default.fixPadding : 0,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Bold14grey,
                  overflow: "hidden",
                  maxWidth: 65,
                }}
              >
                {tr("battery")}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Bold12black,
                  overflow: "hidden",
                  maxWidth: 65,
                }}
              >
                {item.battery}
              </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: Default.fixPadding,
                borderLeftWidth: isRtl ? null : 1,
                borderLeftColor: isRtl ? null : Colors.grey,
                borderRightWidth: isRtl ? 1 : null,
                borderRightColor: isRtl ? Colors.grey : null,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Bold14grey,
                  overflow: "hidden",
                  maxWidth: 65,
                }}
              >
                {tr("range")}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Bold12black,
                  overflow: "hidden",
                  maxWidth: 65,
                }}
              >
                {item.range}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.push("detail/detailScreen", { image: item.image })
              }
              style={{
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                padding: Default.fixPadding,
                borderRadius: 5,
                backgroundColor: Colors.primary,
                ...Default.shadowBtn,
              }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold16white, overflow: "hidden" }}
              >
                {tr("goDetail")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.push("direction/directionScreen")}
              style={{
                width: 40,
                height: 40,
                marginLeft: isRtl ? 0 : Default.fixPadding,
                marginRight: isRtl ? Default.fixPadding : 0,
                justifyContent: "center",
                alignItems: "center",
                padding: Default.fixPadding * 0.5,
                borderRadius: 5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Ionicons name="navigate" size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
        <View
          style={{
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding,
          }}
        >
          <Text style={{ ...Fonts.Bold16black }}>City rider</Text>
          <Text style={{ ...Fonts.Bold14grey }}>Mumbai, Maharashtra</Text>
        </View>
      </View>

      <FlatList
        data={scootersList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: Default.fixPadding }}
      />
    </View>
  );
};

export default SearchResultScreen;
