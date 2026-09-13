import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";

const SearchScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`searchScreen:${key}`);
  }

  const [search, setSearch] = useState();

  const [clearAll, setClearAll] = useState(false);

  const recentlySearchedList = [
    {
      key: "1",
      title: "Mumbai, Maharashtra",
    },
    {
      key: "2",
      title: "Andheri, Kurla road",
    },
    {
      key: "3",
      title: "Bandra, West",
    },
    {
      key: "4",
      title: "Bandra, Kurla complex",
    },
  ];
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
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons
            name={isRtl ? "arrow-forward-outline" : "arrow-back-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>
        <TextInput
          autoFocus={true}
          value={search}
          onChangeText={setSearch}
          placeholder={tr("typeSearch")}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            padding: 0,
            ...Fonts.SemiBold16black,
            flex: 1,
            textAlign: isRtl ? "right" : "left",
            marginHorizontal: Default.fixPadding * 1.5,
          }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingHorizontal: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 1.2,
            marginVertical: Default.fixPadding * 0.1,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <MaterialIcons name="my-location" size={24} color={Colors.primary} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16primary,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("currentLocation")}
          </Text>
        </View>
        {clearAll ? null : (
          <>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: Default.fixPadding * 2,
                paddingVertical: Default.fixPadding * 1.8,
                marginBottom: Default.fixPadding * 1.5,
                backgroundColor: Colors.regularGrey,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  marginRight: isRtl ? 0 : Default.fixPadding,
                  marginLeft: isRtl ? Default.fixPadding : 0,
                  ...Fonts.Bold14black,
                }}
              >
                {tr("recentlySearched")}
              </Text>
              <TouchableOpacity onPress={() => setClearAll(true)}>
                <Text
                  numberOfLines={1}
                  style={{ maxWidth: 100, ...Fonts.Bold14primary }}
                >
                  {tr("clearAll")}
                </Text>
              </TouchableOpacity>
            </View>
            {recentlySearchedList.map((item) => {
              return (
                <TouchableOpacity
                  key={item.key}
                  onPress={() =>
                    navigation.push("searchResult/searchResultScreen")
                  }
                  style={{
                    flexDirection: isRtl ? "row-reverse" : "row",
                    alignItems: "center",
                    marginBottom: Default.fixPadding * 1.5,
                    marginHorizontal: Default.fixPadding * 2,
                  }}
                >
                  <Image
                    source={require("../../assets/images/clock.png")}
                    style={{ width: 20, height: 20, resizeMode: "contain" }}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      flex: 1,
                      textAlign: isRtl ? "right" : "left",
                      ...Fonts.Bold14grey,
                      marginHorizontal: Default.fixPadding,
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
