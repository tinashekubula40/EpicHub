import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from "expo-router";

const AddMoneyScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`addMoneyScreen:${key}`);
  }

  const [amount, seAmount] = useState("$50");
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
          {tr("addMoney")}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            marginTop: Default.fixPadding * 1.8,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{ textAlign: isRtl ? "right" : "left", ...Fonts.Bold16grey }}
          >
            {tr("enterAmount")}
          </Text>
          <View style={{ ...styles.textInput }}>
            <TextInput
              value={amount}
              onChangeText={seAmount}
              keyboardType="number-pad"
              placeholder={tr("enterAmount")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                ...Fonts.Bold18primary,
                textAlign: isRtl ? "right" : "left",
              }}
            />
          </View>
        </View>

        <View
          style={{
            margin: Default.fixPadding * 2,
          }}
        >
          <AwesomeButton
            height={50}
            onPress={() =>
              navigation.push("creditCard/creditCardScreen", { key: "1" })
            }
            raiseLevel={0}
            stretch={true}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text style={{ ...Fonts.Bold18white }}>{tr("add")}</Text>
          </AwesomeButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMoneyScreen;

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: Default.fixPadding * 1.2,
    paddingHorizontal: Default.fixPadding,
    marginTop: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
