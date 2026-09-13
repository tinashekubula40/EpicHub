import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../../constants/styles";
import AwesomeButton from "react-native-really-awesome-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const WalletScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`walletScreen:${key}`);
  }

  const recentTransactionList = [
    {
      key: "1",
      title: "Paid for ride",
      date: "6 April 2022, 5.50 pm",
      other: "$12.20",
      transaction: false,
    },
    {
      key: "2",
      title: "Paid for ride",
      date: "8 April 2022, 4.50 pm",
      other: "$10.20",
      transaction: false,
    },
    {
      key: "3",
      title: "Security deposited",
      date: "10 April 2022, 9.50 am",
      other: "$50.00",
      transaction: true,
    },
    {
      key: "4",
      title: "Paid for ride",
      date: "11 April 2022,3.50 pm",
      other: "$15.10",
      transaction: false,
    },
    {
      key: "5",
      title: "Paid for ride",
      date: "12 April 2022, 3.10 pm",
      other: "$16.30",
      transaction: false,
    },
    {
      key: "6",
      title: "Paid for ride",
      date: "13 April 2022, 8.15 am",
      other: "$12.20",
      transaction: false,
    },
    {
      key: "7",
      title: "Security deposited",
      date: "14 April 2022, 5.00 pm",
      other: "$50.00",
      transaction: true,
    },
    {
      key: "8",
      title: "Paid for ride",
      date: "14 April 2022, 8.15 am",
      other: "$10.20",
      transaction: false,
    },
    {
      key: "9",
      title: "Paid for ride",
      date: "18 April 2022,3.50 pm",
      other: "$19.20",
      transaction: false,
    },
    {
      key: "10",
      title: "Security deposited",
      date: "20 April 2022, 9.50 am",
      other: "$50.00",
      transaction: true,
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
        <Text style={{ ...Fonts.Bold20black }}>{tr("wallet")}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingHorizontal: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 2.4,
            backgroundColor: Colors.lightPrimary,
          }}
        >
          <View
            style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.SemiBold15grey }}>
              {tr("availableBalance")}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold24primary,
                marginTop: Default.fixPadding * 0.5,
              }}
            >
              $120.50
            </Text>
          </View>

          <AwesomeButton
            height={50}
            width={150}
            onPress={() => navigation.push("addMoney/addMoneyScreen")}
            raiseLevel={0}
            stretch={false}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Bold18white, overflow: "hidden" }}
            >
              {tr("addMoney")}
            </Text>
          </AwesomeButton>
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Bold16grey,
            marginHorizontal: Default.fixPadding * 2,
            marginVertical: Default.fixPadding * 1.5,
          }}
        >
          {tr("recentTransaction")}
        </Text>

        <View
          style={{
            backgroundColor: Colors.lightRegularGrey,
            paddingBottom: Default.fixPadding * 2,
          }}
        >
          {recentTransactionList.map((item, index) => {
            const firstItem = index === 0;
            return (
              <TouchableOpacity
                key={item.key}
                activeOpacity={0.8}
                onPress={() => navigation.push("receipt/receiptScreen")}
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  paddingVertical: Default.fixPadding * 2,
                  marginHorizontal: Default.fixPadding * 2,
                  borderTopWidth: firstItem ? null : 1,
                  borderTopColor: firstItem ? null : Colors.lightGrey,
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
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: Colors.white,
                      ...Default.shadow,
                    }}
                  >
                    <Ionicons
                      name={
                        item.transaction
                          ? "lock-closed-outline"
                          : "bicycle-sharp"
                      }
                      size={22}
                      color={Colors.primary}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: isRtl ? "flex-end" : "flex-start",
                      marginHorizontal: Default.fixPadding * 1.5,
                    }}
                  >
                    <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        ...Fonts.Bold14grey,
                        marginTop: Default.fixPadding * 0.2,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>

                <Text
                  numberOfLines={1}
                  style={{
                    ...(item.transaction ? Fonts.Bold16green : Fonts.Bold16red),
                    overflow: "hidden",
                    maxWidth: 100,
                  }}
                >
                  {item.other}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default WalletScreen;
