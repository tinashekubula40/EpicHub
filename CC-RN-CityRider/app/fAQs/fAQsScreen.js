import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/styles";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const FAQsScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`fAQsScreen:${key}`);
  }

  const fAQsList = [
    {
      key: "1",
      title: tr("question1"),
    },
    {
      key: "2",
      title: tr("question2"),
    },
    {
      key: "3",
      title: tr("question3"),
    },
    {
      key: "4",
      title: tr("question4"),
    },
    {
      key: "5",
      title: tr("question5"),
    },
    {
      key: "6",
      title: tr("question6"),
    },
  ];

  const [fAQsData, setFAQsData] = useState(fAQsList);

  const onSelectItem = (item) => {
    const newItem = fAQsData.map((val) => {
      if (val.key === item.key) {
        return { ...val, selected: !val.selected };
      } else {
        return val;
      }
    });
    setFAQsData(newItem);
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
          {tr("fAQs")}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: Default.fixPadding }}>
          {fAQsData.map((item) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                key={item.key}
                onPress={() => onSelectItem(item)}
                style={{
                  paddingVertical: Default.fixPadding * 1.5,
                  paddingHorizontal: Default.fixPadding * 2,
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
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      ...Fonts.SemiBold16black,
                      flex: 1,
                      textAlign: isRtl ? "right" : "left",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </Text>

                  <Ionicons
                    name={
                      item.selected
                        ? "chevron-up-outline"
                        : "chevron-down-outline"
                    }
                    size={20}
                    color={Colors.black}
                  />
                </View>
                {item.selected && (
                  <View style={{ marginTop: Default.fixPadding * 1.2 }}>
                    <Text
                      style={{
                        ...Fonts.Regular14grey,
                        textAlign: isRtl ? "right" : "left",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas amet ut eget eu nibh lorem velit. Id ornare
                      lectus mauris, mauris. Pharetra, amet erat feugiat
                      duis.Maecenas amet ut eget eu nibh lorem velit. Id ornare
                      lectus mauris, mauris. Pharetra, amet erat feugiat
                      duis.eget eu nibh lorem velit. Id ornare lectus mauris,
                      mauris. Pharetra,
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQsScreen;
