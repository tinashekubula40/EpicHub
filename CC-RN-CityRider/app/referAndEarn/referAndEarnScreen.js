import {
  StyleSheet,
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
import Octicons from "react-native-vector-icons/Octicons";
import * as Clipboard from "expo-clipboard";
import SnackbarToast from "../../components/snackbarToast";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "expo-router";

const ReferAndEarnScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`referAndEarnScreen:${key}`);
  }

  const [copyMessage, setCopyMessage] = useState(
    "http://www.referralcityrideride/jkk"
  );

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(copyMessage);
  };

  const [copyToast, setCopyToast] = useState(false);
  const onDismissCopyToast = () => setCopyToast(false);

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
          {tr("referAndEarn")}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: Default.fixPadding * 4.3,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Image
            source={require("../../assets/images/photo.png")}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />

          <Text
            style={{
              ...Fonts.Bold20black,
              textAlign: "center",
              marginTop: Default.fixPadding * 5.5,
            }}
          >
            {tr("referUpTo")}
          </Text>
          <Text
            style={{
              ...Fonts.SemiBold16grey,
              textAlign: "center",
              marginTop: Default.fixPadding,
            }}
          >
            {tr("shareThisLink")}
            <Text style={{ ...Fonts.SemiBold16primary }}>{` $30.`}</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.textInputCard,
          }}
        >
          <TextInput
            value={copyMessage}
            onChangeText={setCopyMessage}
            selectionColor={Colors.primary}
            placeholder={tr("writeMessageHere")}
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              ...Fonts.SemiBold14primary,
              flex: 1,
              textAlign: isRtl ? "right" : "left",
            }}
          />
          <TouchableOpacity
            disabled={!copyMessage}
            onPress={() => {
              copyToClipboard();
              setCopyToast(true);
            }}
          >
            <Octicons name="copy" size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={{ ...Fonts.SemiBold18black, textAlign: "center" }}>
          {tr("shareLinkVia")}
        </Text>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: Default.fixPadding * 2.2,
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: Colors.blue,
            }}
          >
            <FontAwesome name="facebook" size={30} color={Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: Default.fixPadding * 2,
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: Colors.lightGreen,
            }}
          >
            <FontAwesome name="whatsapp" size={30} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={[Colors.orange, Colors.darkPink]}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            >
              <FontAwesome name="instagram" size={30} color={Colors.white} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SnackbarToast
        title={tr("toastCopy")}
        visible={copyToast}
        onDismiss={onDismissCopyToast}
      />
    </View>
  );
};

export default ReferAndEarnScreen;

const styles = StyleSheet.create({
  textInputCard: {
    justifyContent: "center",
    paddingHorizontal: Default.fixPadding * 1.5,
    paddingVertical: Default.fixPadding * 1.2,
    marginHorizontal: Default.fixPadding * 2,
    marginVertical: Default.fixPadding * 5,
    borderWidth: 1.7,
    borderStyle: "dashed",
    borderColor: Colors.primary,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
});
