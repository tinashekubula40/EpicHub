import {
  Text,
  View,
  BackHandler,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import SnackbarToast from "../../components/snackbarToast";
import AwesomeButton from "react-native-really-awesome-button";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "expo-router";
const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  function tr(key) {
    return t(`onboardingScreen:${key}`);
  }

  const [visibleToast, setVisibleToast] = useState(false);
  const onDismissVisibleToast = () => setVisibleToast(false);

  const [exitApp, setExitApp] = useState(0);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (Platform.OS === "android") {
          setTimeout(() => {
            setExitApp(0);
          }, 2000);

          if (exitApp === 0) {
            setExitApp(exitApp + 1);
            setVisibleToast(true);
          } else if (exitApp === 1) {
            BackHandler.exitApp();
          }
          return true;
        }
      };
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, [exitApp])
  );
  const ref = useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != onboardingSlides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const onboardingSlides = [
    {
      key: "1",
      image: require("../../assets/images/onboarding1.png"),
      title: tr("title1"),
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornllconsectetur ut praesent aliquam volutpat  ",
    },
    {
      key: "2",
      image: require("../../assets/images/onboarding2.png"),
      title: tr("title2"),
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornllconsectetur ut praesent aliquam volutpat  ",
    },
    {
      key: "3",
      image: require("../../assets/images/onboarding3.png"),
      title: tr("title3"),
      description:
        "Lorem ipsum dolor sit amet consectetur. Ornllconsectetur ut praesent aliquam volutpat  ",
    },
  ];

  const renderItemSlides = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: width,
        }}
      >
        <View
          style={{
            flex: 8,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            resizeMode={"cover"}
            source={item.image}
            style={{ flex: 8, width: width }}
          />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            marginTop: Default.fixPadding * 3.5,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text style={{ ...Fonts.Bold22black }}>{item.title}</Text>
          <Text
            style={{
              ...Fonts.SemiBold14grey,
              textAlign: "center",
              marginTop: Default.fixPadding,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View
        style={{
          margin: Default.fixPadding * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {onboardingSlides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dotIndicator,
                currentSlideIndex == index && {
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: Colors.primary,
                },
              ]}
            />
          ))}
        </View>

        <View
          style={{
            marginVertical: Default.fixPadding * 2,
          }}
        >
          <AwesomeButton
            height={50}
            onPress={() => {
              if (currentSlideIndex == onboardingSlides.length - 1) {
                return navigation.push("auth/loginScreen");
              } else {
                goToNextSlide();
              }
            }}
            raiseLevel={0}
            stretch={true}
            borderRadius={5}
            backgroundShadow={Colors.primary}
            backgroundDarker={Colors.primary}
            backgroundColor={Colors.primary}
          >
            <Text style={{ ...Fonts.Bold18white }}>
              {currentSlideIndex == onboardingSlides.length - 1
                ? tr("login")
                : tr("next")}
            </Text>
          </AwesomeButton>
        </View>

        <TouchableOpacity
          disabled={currentSlideIndex == onboardingSlides.length - 1}
          onPress={() => navigation.push("auth/loginScreen")}
          style={{
            alignSelf: "center",
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              ...(currentSlideIndex == onboardingSlides.length - 1
                ? Fonts.SemiBold16transparent
                : Fonts.SemiBold16grey),
            }}
          >
            {tr("skip")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <FlatList
        ref={ref}
        horizontal
        pagingEnabled
        data={onboardingSlides}
        renderItem={renderItemSlides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
      />
      <ListFooterComponent />

      <SnackbarToast
        visible={visibleToast}
        title={tr("tapBack")}
        onDismiss={onDismissVisibleToast}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  dotIndicator: {
    marginHorizontal: Default.fixPadding * 0.5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.lightGrey,
  },
});
