import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Colors, Default, Fonts } from "../constants/styles";
import { useTranslation } from "react-i18next";
import { BottomSheet } from "react-native-btr";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Stars from "react-native-stars";
import AwesomeButton from "react-native-really-awesome-button";

const GiveRateBottomSheet = (props) => {
  const { t } = useTranslation();

  function tr(key) {
    return t(`giveRateBottomSheet:${key}`);
  }
  return (
    <BottomSheet
      visible={props.visible}
      onBackButtonPress={props.closeBottomSheet}
      onBackdropPress={props.closeBottomSheet}
    >
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: Default.fixPadding * 1.6,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text style={{ ...Fonts.Bold20primary }}>{tr("giveRate")}</Text>
          <Text
            style={{
              ...Fonts.Bold16black,
              textAlign: "center",
              marginTop: Default.fixPadding,
            }}
          >
            {tr("description")}
          </Text>
        </View>
        <View style={{ marginVertical: Default.fixPadding * 2.5 }}>
          <Stars
            default={4}
            count={5}
            spacing={10}
            half={false}
            fullStar={
              <FontAwesome name={"star"} size={40} color={Colors.primary} />
            }
            emptyStar={
              <FontAwesome name={"star"} size={40} color={Colors.grey} />
            }
          />
        </View>

        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <AwesomeButton
            height={50}
            onPress={() => props.onSubmitHandler()}
            raiseLevel={0}
            stretch={true}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text style={{ ...Fonts.Bold18white }}>{tr("submit")}</Text>
          </AwesomeButton>
        </View>

        <TouchableOpacity
          onPress={props.closeBottomSheet}
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <Text style={{ ...Fonts.Bold18primary }}>{tr("cancel")}</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default GiveRateBottomSheet;
