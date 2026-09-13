import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/styles";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`privacyPolicyScreen:${key}`);
  }

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
          {tr("privacyPolicy")}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: Default.fixPadding,
            marginBottom: Default.fixPadding * 1.5,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16black,
            }}
          >
            {tr("introduction")}
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginVertical: Default.fixPadding,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing tsem maecenas
            proin nec, iaculiviverramalesuadalacus.Lorem ipsum dolor sit amet,
            consectetuadipiscing elit.maecenas proin nec, turpis
            iaculiviverramassa malesualacus.Lorem ipsum dolor siamet,consectetur
            adipiscing elit. maecenas proin turpis iaculiviverra massa
            malesuadlacus.necturpis
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginBottom: Default.fixPadding,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing tsem maecenas
            proin nec, iaculiviverramalesuadalacus.Lorem ipsum dolor sit amet,
            consectetuadipiscing elit.maecenas proin nec, turpis
            iaculiviverramassa malesualacus.Lorem ipsum dolor siamet,consectetur
            adipiscing elit. maecenas proin turpis iaculiviverra massa
            malesuadlacus.necturpis
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing tsem maecenas
            proin nec, iaculiviverramalesuadalacus.Lorem ipsum dolor sit amet,
            consectetuadipiscing elit.maecenas proin nec, turpis
            iaculiviverramassa malesualacus.Lorem ipsum dolor siamet,consectetur
            adipiscing elit. maecenas proin turpis iaculiviverra massa
            malesuadlacus.necturpis iaculiviverramassal.Lorem ipsum dolor
            siakloconsectetur adipiscing elit. Sem maecenas
            poaculiviverramalesuada lacus.Lorem ipsum dolor sit amet,
            consectetuadiooiselit. Sem maecenas proin nec, turpis
            iaculiviverrhjmalesuada lacus.Lorem ipsum dolor siamet,consectetur
            adipiscinelit. Sem maecenas proin turpis iaculiviverra massmalesuada
          </Text>
        </View>

        <View
          style={{
            marginBottom: Default.fixPadding * 1.5,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Bold16black,
            }}
          >
            {tr("privacyPolicy")}
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginVertical: Default.fixPadding,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing tsem maecenas
            proin nec, iaculiviverramalesuadalacus.Lorem ipsum dolor sit amet,
            consectetuadipiscing elit.maecenas proin nec, turpis
            iaculiviverramassa malesualacus.Lorem ipsum dolor siamet,consectetur
            adipiscing elit. maecenas proin turpis iaculiviverra massa
            malesuadlacus.necturpis
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
              marginBottom: Default.fixPadding,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing tsem maecenas
            proin nec, iaculiviverramalesuadalacus.Lorem ipsum dolor sit amet,
            consectetuadipiscing elit.maecenas proin nec, turpis
            iaculiviverramassa malesualacus.Lorem ipsum dolor siamet,consectetur
            adipiscing elit. maecenas proin turpis iaculiviverra massa
            malesuadlacus.necturpis
          </Text>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold14grey,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing tsem maecenas
            proin nec, iaculiviverramalesuadalacus.Lorem ipsum dolor sit amet,
            consectetuadipiscing elit.maecenas proin nec, turpis
            iaculiviverramassa malesualacus.Lorem ipsum dolor siamet,consectetur
            adipiscing elit. maecenas proin turpis iaculiviverra massa
            malesuadlacus.necturpis iaculiviverramassal.Lorem ipsum dolor
            siakloconsectetur adipiscing elit. Sem maecenas
            poaculiviverramalesuada lacus.Lorem ipsum dolor sit amet,
            consectetuadiooiselit. Sem maecenas proin nec, turpis
            iaculiviverrhjmalesuada lacus.Lorem ipsum dolor siamet,consectetur
            adipiscinelit. Sem maecenas proin turpis iaculiviverra massmalesuada
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;
