import {
  Text,
  View,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/styles";
import MyStatusBar from "../../components/myStatusBar";
import AwesomeButton from "react-native-really-awesome-button";
import CreditCard from "react-native-credit-card-ui";
import * as cardValidator from "card-validator";
import { useLocalSearchParams, useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const CreditCardScreen = () => {
  const navigation = useNavigation();

  const { key } = useLocalSearchParams();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`creditCardScreen:${key}`);
  }
  const backAction = () => {
    navigation.pop();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const [focused, setFocused] = useState("name");
  const [backspaceRemove, setBackspaceRemove] = useState(false);

  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);

  const [number, setNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(true);

  const [cvvCode, setCvvCode] = useState("");
  const [isValidCvv, setIsValidCvv] = useState(true);

  const [expiryDate, setExpiryDate] = useState("");
  const [isValidExpiry, setIsValidExpiry] = useState(true);

  const handleExpiryDate = (text) => {
    let textTemp = text;
    if (textTemp[0] !== "1" && textTemp[0] !== "0") {
      textTemp = "";
    }
    if (textTemp.length === 2) {
      if (
        parseInt(textTemp.substring(0, 2)) > 12 ||
        parseInt(textTemp.substring(0, 2)) == 0
      ) {
        textTemp = textTemp[0];
      } else if (text.length === 2 && !backspaceRemove) {
        textTemp += "/";
        setBackspaceRemove(true);
      } else if (text.length === 2 && backspaceRemove) {
        textTemp = textTemp[0];
        setBackspaceRemove(false);
      } else {
        textTemp = textTemp[0];
      }
    }
    setExpiryDate(textTemp);
    let expireDateValidation = cardValidator.expirationDate(textTemp);
    setIsValidExpiry(expireDateValidation.isValid);
  };

  const [cardType, setCardType] = useState("mastercard");

  const getCardType = (number) => {
    const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegEx = /^5[1-5][0-9]{14}$/;
    const amexRegEx = /^3[47][0-9]{13}$/;
    const discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

    if (visaRegEx.test(number)) return "visa";
    if (mastercardRegEx.test(number)) return "mastercard";
    if (amexRegEx.test(number)) return "amex";
    if (discoverRegEx.test(number)) return "discover";
    return "mastercard";
  };

  const handleCardNumberChange = (value) => {
    let formattedText = value.split(" ").join("");
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join(" ");
    }

    if (formattedText.length === 19) {
      var numberValidation = cardValidator.number(value);
      setIsValidNumber(numberValidation.isValid);
      const newCardType = getCardType(formattedText.replace(/\s/g, ""));
      setCardType(newCardType);
    } else {
      setIsValidNumber(false);
    }
    setNumber(formattedText);
  };

  const formattedNumber = number.replace(/\s/g, "");

  const creditCard = () => {
    return (
      <CreditCard
        key={cardType}
        type={cardType}
        imageFront={require("../../assets/images/card.png")}
        imageBack={require("../../assets/images/card.png")}
        shiny={true}
        bar={true}
        flip={true}
        focused={focused}
        width={width * 0.9}
        height={220}
        number={formattedNumber}
        name={name}
        expiry={expiryDate}
        cvc={cvvCode}
        style={{
          marginVertical: Default.fixPadding * 1.5,
          alignSelf: "center",
          backgroundColor: Colors.primary,
        }}
      />
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
          {tr("creditCard")}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        {creditCard()}
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("enterCardDetails")}
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16grey,
              marginTop: Default.fixPadding * 1.6,
            }}
          >
            {tr("name")}
          </Text>

          <View
            style={{
              paddingVertical: Default.fixPadding * 1.2,
              paddingHorizontal: Default.fixPadding * 1.5,
              marginTop: Default.fixPadding * 0.9,
              marginBottom: Default.fixPadding * 2,
              borderRadius: 5,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
          >
            <TextInput
              value={name}
              onChangeText={(text) => {
                setFocused("name");
                setName(text);
                let nameValidation = cardValidator.cardholderName(text);
                setIsValidName(nameValidation.isValid);
              }}
              placeholder={tr("enterName")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                ...(isValidName ? Fonts.SemiBold16black : Fonts.SemiBold16red),
                textAlign: isRtl ? "right" : "left",
              }}
            />
          </View>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16grey,
            }}
          >
            {tr("cardNo")}
          </Text>

          <View
            style={{
              paddingVertical: Default.fixPadding * 1.2,
              paddingHorizontal: Default.fixPadding * 1.5,
              marginTop: Default.fixPadding * 0.9,
              marginBottom: Default.fixPadding * 2,
              borderRadius: 5,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
          >
            <TextInput
              maxLength={19}
              value={number}
              onChangeText={(text) => {
                setFocused("number");
                handleCardNumberChange(text);
              }}
              keyboardType={"number-pad"}
              placeholder={tr("enterCard")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              numberOfLines={1}
              style={{
                padding: 0,
                ...(isValidNumber
                  ? Fonts.SemiBold16black
                  : Fonts.SemiBold16red),
                textAlign: isRtl ? "right" : "left",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              marginBottom: Default.fixPadding * 2,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...Fonts.SemiBold16grey,
                  textAlign: isRtl ? "right" : "left",
                }}
              >
                {tr("expiryDate")}
              </Text>

              <View
                style={{
                  paddingVertical: Default.fixPadding * 1.2,
                  paddingHorizontal: Default.fixPadding * 1.5,
                  marginTop: Default.fixPadding * 0.9,
                  marginRight: isRtl ? 0 : Default.fixPadding * 2,
                  marginLeft: isRtl ? Default.fixPadding * 2 : 0,
                  borderRadius: 5,
                  backgroundColor: Colors.white,
                  ...Default.shadow,
                }}
              >
                <TextInput
                  maxLength={5}
                  value={expiryDate}
                  keyboardType="decimal-pad"
                  onChangeText={(text) => {
                    setFocused("expiry");
                    handleExpiryDate(text);
                  }}
                  selectionColor={Colors.primary}
                  placeholder={tr("expiryDate")}
                  placeholderTextColor={Colors.grey}
                  numberOfLines={1}
                  style={{
                    padding: 0,
                    ...(isValidExpiry
                      ? Fonts.SemiBold16black
                      : Fonts.SemiBold16red),
                    textAlign: isRtl ? "right" : "left",
                  }}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...Fonts.SemiBold16grey,
                  textAlign: isRtl ? "right" : "left",
                }}
              >
                CVV
              </Text>

              <View
                style={{
                  paddingVertical: Default.fixPadding * 1.2,
                  paddingHorizontal: Default.fixPadding * 1.5,
                  marginTop: Default.fixPadding * 0.9,
                  borderRadius: 5,
                  backgroundColor: Colors.white,
                  ...Default.shadow,
                }}
              >
                <TextInput
                  maxLength={3}
                  value={cvvCode}
                  secureTextEntry={true}
                  keyboardType="number-pad"
                  onChangeText={(text) => {
                    setFocused("cvc");
                    setCvvCode(text);
                    if (text.length === 3) {
                      var cvvValidation = cardValidator.cvv(text);
                      setIsValidCvv(cvvValidation.isValid);
                    } else {
                      setIsValidCvv(false);
                    }
                  }}
                  selectionColor={Colors.primary}
                  placeholder={`CVV ${tr("enterCvv")}`}
                  placeholderTextColor={Colors.grey}
                  numberOfLines={1}
                  style={{
                    padding: 0,
                    ...(isValidCvv
                      ? Fonts.SemiBold16black
                      : Fonts.SemiBold16red),
                    textAlign: isRtl ? "right" : "left",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          margin: Default.fixPadding * 2,
        }}
      >
        <AwesomeButton
          height={50}
          onPress={() => {
            if (key === "1") {
              navigation.push(
                "successfullyAddedMoney/successfullyAddedMoneyScreen"
              );
            } else {
              navigation.push("success/successScreen");
            }
          }}
          raiseLevel={0}
          stretch={true}
          borderRadius={5}
          backgroundShadow={Colors.primary}
          backgroundDarker={Colors.primary}
          backgroundColor={Colors.primary}
        >
          <Text style={{ ...Fonts.Bold18white }}>{tr("payment")}</Text>
        </AwesomeButton>
      </View>
    </View>
  );
};

export default CreditCardScreen;
