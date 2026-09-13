import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../../components/myStatusBar";
import MapView, { Marker } from "react-native-maps";
import { Colors, Fonts, Default } from "../../../constants/styles";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import DashedLine from "react-native-dashed-line";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;

const HomeScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`homeScreen:${key}`);
  }

  const mapRef = useRef(null);
  const scrollViewRef = useRef(null);

  const scootersList = [
    {
      key: "1",
      image: require("../../../assets/images/pic1.png"),
      address: "6391 Elgin St. Celina, Mumbai ,Maharashtra",
      timeAndKm: "15 min/2.5 km",
      scootersAvailable: "5",
      battery: "90%",
      range: "30-35 km",
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4254486,
      },
    },
    {
      key: "2",
      image: require("../../../assets/images/pic2.png"),
      address: "8502 Preston Road, Mumbai ,Maharashtra",
      timeAndKm: "30 min/3.5 km",
      scootersAvailable: "10",
      battery: "90%",
      range: "30-35 km",
      coordinate: {
        latitude: 22.6445648,
        longitude: 88.4477279,
      },
    },
    {
      key: "3",
      image: require("../../../assets/images/pic3.png"),
      address: "4140, Parker road,Mumbai ,Maharashtra",
      timeAndKm: "25 min/1.5 km",
      scootersAvailable: "6",
      battery: "90%",
      range: "30-35 km",
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4420113,
      },
    },
    {
      key: "4",
      image: require("../../../assets/images/pic4.png"),
      address: "1901, Thornridge Cir, Mumbai ,Maharashtra",
      timeAndKm: "15 min/2.5 km",
      scootersAvailable: "8",
      battery: "90%",
      range: "30-35 km",
      coordinate: {
        latitude: 22.6481662,
        longitude: 88.4210113,
      },
    },
  ];

  const initialMapData = {
    latitude: 22.63538671242907,
    longitude: 88.4354486029795,
    latitudeDelta: 0.0486419504,
    longitudeDelta: 0.040142817,
  };

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= scootersList.length) {
        index = scootersList.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = scootersList[index];
          mapRef.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: initialMapData.latitudeDelta,
              longitudeDelta: initialMapData.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = scootersList.map((_, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.3, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;
    let x = markerID * CARD_WIDTH + markerID * 15;
    scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMapReady(true);
    }, 800);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {mapReady && (
          <View
            style={{
              zIndex: 1,
              position: "absolute",
              left: 0,
              right: 0,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.push("search/searchScreen")}
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: Default.fixPadding * 1.2,
                marginVertical: Default.fixPadding * 2,
                marginLeft: isRtl
                  ? Default.fixPadding * 2
                  : Default.fixPadding * 2.8,
                marginRight: isRtl
                  ? Default.fixPadding * 2.8
                  : Default.fixPadding * 2,
                borderRadius: 5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Bold15grey,
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  overflow: "hidden",
                  marginLeft: isRtl ? 0 : Default.fixPadding * 5,
                  marginRight: isRtl ? Default.fixPadding * 5 : 0,
                }}
              >
                {tr("whereDoYou")}
              </Text>
              <Image
                source={require("../../../assets/images/direction.png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
              <View
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  left: isRtl ? null : -Default.fixPadding,
                  right: isRtl ? -Default.fixPadding : null,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: Colors.white,
                  ...Default.shadow,
                }}
              >
                <Image
                  source={require("../../../assets/images/profile.png")}
                  style={{
                    width: 51,
                    height: 51,
                    borderRadius: 26,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}

        {mapReady && (
          <View style={{ zIndex: 1, position: "absolute", bottom: 0 }}>
            <Animated.ScrollView
              horizontal
              pagingEnabled
              ref={scrollViewRef}
              scrollEventThrottle={1}
              snapToAlignment="center"
              decelerationRate={"fast"}
              snapToInterval={CARD_WIDTH + Default.fixPadding * 2.2}
              style={{ transform: [{ scaleX: isRtl ? -1 : 1 }] }}
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        x: mapAnimation,
                      },
                    },
                  },
                ],
                { useNativeDriver: true }
              )}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: Default.fixPadding * 1.5,
                  transform: [{ scaleX: isRtl ? -1 : 1 }],
                }}
              >
                {scootersList.map((item) => {
                  return (
                    <View
                      key={item.key}
                      style={{
                        marginHorizontal: Default.fixPadding * 0.5,
                        marginBottom: Default.fixPadding * 3.7,
                        width: CARD_WIDTH,
                        borderRadius: 10,
                        backgroundColor: Colors.white,
                        ...Default.shadow,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: isRtl ? "row-reverse" : "row",
                          alignItems: "center",
                          paddingVertical: Default.fixPadding * 0.6,
                          paddingHorizontal: Default.fixPadding,
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            resizeMode: "contain",
                            width: 136,
                            height: 90,
                          }}
                        />

                        <View
                          style={{
                            flex: 1,
                            alignItems: isRtl ? "flex-end" : "flex-start",
                            marginLeft: isRtl ? 0 : Default.fixPadding * 2.5,
                            marginRight: isRtl ? Default.fixPadding * 2.5 : 0,
                          }}
                        >
                          <Text
                            numberOfLines={2}
                            style={{ ...Fonts.Bold15black, overflow: "hidden" }}
                          >
                            {item.address}
                          </Text>
                          <View
                            style={{
                              flexDirection: isRtl ? "row-reverse" : "row",
                              alignItems: "center",
                              marginVertical: Default.fixPadding * 0.2,
                            }}
                          >
                            <Feather
                              name="clock"
                              size={15}
                              color={Colors.grey}
                            />
                            <Text
                              numberOfLines={1}
                              style={{
                                flex: 1,
                                textAlign: isRtl ? "right" : "left",
                                ...Fonts.SemiBold14grey,
                                marginHorizontal: Default.fixPadding * 0.3,
                              }}
                            >
                              {item.timeAndKm}
                            </Text>
                          </View>

                          <Text
                            numberOfLines={1}
                            style={{
                              ...Fonts.Bold15primary,
                              overflow: "hidden",
                            }}
                          >
                            {`${item.scootersAvailable} ${tr(
                              "scootersAvailable"
                            )}`}
                          </Text>
                        </View>
                      </View>
                      <DashedLine
                        dashGap={2}
                        dashLength={2}
                        dashThickness={1}
                        dashColor={Colors.grey}
                      />

                      <View
                        style={{
                          flexDirection: isRtl ? "row-reverse" : "row",
                          alignItems: "center",
                          paddingVertical: Default.fixPadding,
                          paddingHorizontal: Default.fixPadding * 1.5,
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
                              paddingRight: isRtl ? 0 : Default.fixPadding,
                              paddingLeft: isRtl ? Default.fixPadding : 0,
                            }}
                          >
                            <Text
                              numberOfLines={1}
                              style={{
                                ...Fonts.Bold14grey,
                                overflow: "hidden",
                                maxWidth: 65,
                              }}
                            >
                              {tr("battery")}
                            </Text>
                            <Text
                              numberOfLines={1}
                              style={{
                                maxWidth: 65,
                                ...Fonts.Bold12black,
                                overflow: "hidden",
                              }}
                            >
                              {item.battery}
                            </Text>
                          </View>

                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              paddingHorizontal: Default.fixPadding,
                              borderLeftWidth: isRtl ? null : 1,
                              borderLeftColor: isRtl ? null : Colors.grey,
                              borderRightWidth: isRtl ? 1 : null,
                              borderRightColor: isRtl ? Colors.grey : null,
                            }}
                          >
                            <Text
                              numberOfLines={1}
                              style={{
                                maxWidth: 65,
                                ...Fonts.Bold14grey,
                                overflow: "hidden",
                              }}
                            >
                              {tr("range")}
                            </Text>
                            <Text
                              numberOfLines={1}
                              style={{
                                maxWidth: 65,
                                ...Fonts.Bold12black,
                                overflow: "hidden",
                              }}
                            >
                              {item.range}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: isRtl ? "row-reverse" : "row",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() =>
                              navigation.push("detail/detailScreen", {
                                image: item.image,
                              })
                            }
                            style={{
                              width: 100,
                              justifyContent: "center",
                              alignItems: "center",
                              padding: Default.fixPadding,
                              borderRadius: 5,
                              backgroundColor: Colors.primary,
                              ...Default.shadowBtn,
                            }}
                          >
                            <Text
                              numberOfLines={1}
                              style={{
                                ...Fonts.Bold16white,
                                overflow: "hidden",
                              }}
                            >
                              {tr("goDetail")}
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() =>
                              navigation.push("direction/directionScreen")
                            }
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              width: 40,
                              height: 40,
                              marginLeft: isRtl ? 0 : Default.fixPadding,
                              marginRight: isRtl ? Default.fixPadding : 0,
                              borderRadius: 5,
                              backgroundColor: Colors.white,
                              ...Default.shadow,
                            }}
                          >
                            <Ionicons
                              name="navigate"
                              size={20}
                              color={Colors.primary}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </Animated.ScrollView>
          </View>
        )}
        {mapReady && (
          <MapView
            loadingEnabled={true}
            loadingBackgroundColor={"transparent"}
            loadingIndicatorColor={Colors.primary}
            ref={mapRef}
            initialRegion={initialMapData}
            style={{ flex: 1 }}
          >
            <Marker
              coordinate={{ latitude: 22.6395638, longitude: 88.4317239 }}
              image={require("../../../assets/images/marker1.png")}
            />

            {scootersList.map((marker, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              };
              return (
                <Marker
                  key={index}
                  coordinate={marker.coordinate}
                  onPress={(e) => onMarkerPress(e)}
                >
                  <Animated.View style={[styles.markerWrap]}>
                    <Animated.Image
                      resizeMode="contain"
                      source={require("../../../assets/images/mapMarker.png")}
                      style={[styles.marker, scaleStyle]}
                    />
                  </Animated.View>
                </Marker>
              );
            })}
          </MapView>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  marker: {
    justifyContent: "center",
    alignItems: "center",
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});
