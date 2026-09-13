import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";

const ReceiptScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`receiptScreen:${key}`);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraRegularGrey }}>
      <MyStatusBar />
      <View style={{ backgroundColor: Colors.white }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            alignSelf: isRtl ? "flex-end" : "flex-start",
            paddingHorizontal: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 1.2,
          }}
        >
          <Ionicons
            name={isRtl ? "arrow-forward-outline" : "arrow-back-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: Default.fixPadding * 3.5,
            paddingBottom: Default.fixPadding * 6.3,
            backgroundColor: Colors.white,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: Default.fixPadding * 1.8,
              width: 102,
              height: 102,
              borderRadius: 51,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
          >
            <Ionicons name="bicycle" size={66} color={Colors.primary} />
          </View>
          <Text style={{ ...Fonts.Bold18black }}>{tr("youArePaid")}</Text>
          <Text
            style={{
              ...Fonts.Bold22primary,
              marginTop: Default.fixPadding * 0.7,
            }}
          >
            $12.00
          </Text>
        </View>

        <View
          style={{
            paddingTop: Default.fixPadding * 3.4,
            paddingHorizontal: Default.fixPadding * 2,
          }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: Default.fixPadding * 3,
            }}
          >
            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("rideStartLocation")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <SimpleLineIcons
                  name="location-pin"
                  size={20}
                  color={Colors.grey}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  1901, Thornridge Cir, Mumbai ,Maharashtra
                </Text>
              </View>
            </View>

            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("rideEndLocation")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <SimpleLineIcons
                  name="location-pin"
                  size={20}
                  color={Colors.grey}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: isRtl ? "right" : "left",
                    flex: 1,
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  1901, Thornridge Cir, Mumbai ,Maharashtra
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: Default.fixPadding * 3,
            }}
          >
            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("purpose")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Ionicons name="bicycle" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  Ride of cycle
                </Text>
              </View>
            </View>

            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("paymentMethod")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Ionicons name="card-outline" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  Credit card
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: Default.fixPadding * 3,
            }}
          >
            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("paymentDate")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Feather name="calendar" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  20 April 2020
                </Text>
              </View>
            </View>

            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("paymentTime")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Feather name="clock" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  Monday 11:PM
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: Default.fixPadding * 3,
            }}
          >
            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("cycleNo")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Ionicons name="bicycle" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  BK4567
                </Text>
              </View>
            </View>

            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("receiptNo")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <MaterialIcons name="list-alt" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  1245611
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: Default.fixPadding * 3,
            }}
          >
            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("name")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Feather name="user" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  Jeklin shah
                </Text>
              </View>
            </View>

            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Bold15black, overflow: "hidden" }}
              >
                {tr("rideTime")}
              </Text>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                <Feather name="clock" size={20} color={Colors.grey} />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold12grey,
                    overflow: "hidden",
                    marginHorizontal: Default.fixPadding * 0.5,
                  }}
                >
                  2 Hour
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Text
        style={{
          ...Fonts.Bold15grey,
          textAlign: "center",
          margin: Default.fixPadding * 2,
        }}
      >
        {tr("needHelp")}
        <Text
          onPress={() => navigation.navigate("help/helpScreen")}
          style={{ ...Fonts.Bold15primary }}
        >{` ${tr("contactUs")}`}</Text>
      </Text>
    </View>
  );
};

export default ReceiptScreen;
