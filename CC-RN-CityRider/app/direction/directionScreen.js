import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation } from "expo-router";

const DirectionScreen = () => {
  const navigation = useNavigation();

  const { i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  const initialMapData = {
    latitude: 37.711707,
    longitude: -122.4253769,
    latitudeDelta: 0.09122,
    longitudeDelta: 0.09422,
  };

  const [coordinates] = useState([
    {
      latitude: 37.7228876,
      longitude: -122.4134812,
    },
    {
      latitude: 37.733707,
      longitude: -122.4421769,
    },
  ]);

  const [coordinatesTwo] = useState([
    {
      latitude: 37.733707,
      longitude: -122.4421769,
    },
    {
      latitude: 37.743707,
      longitude: -122.4441769,
    },
  ]);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMapReady(true);
    }, 800);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
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
              onPress={() => navigation.pop()}
              style={{
                alignSelf: isRtl ? "flex-end" : "flex-start",
                marginHorizontal: Default.fixPadding * 2,
                marginTop: Default.fixPadding * 1.2,
              }}
            >
              <Ionicons
                name={isRtl ? "arrow-forward-outline" : "arrow-back-outline"}
                size={25}
                color={Colors.black}
              />
            </TouchableOpacity>
          </View>
        )}
        {mapReady && (
          <View
            style={{
              zIndex: 1,
              position: "absolute",
              bottom: Default.fixPadding * 2,
              left: 0,
              right: 0,
            }}
          >
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                padding: Default.fixPadding * 0.6,
                marginHorizontal: Default.fixPadding * 2,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Image
                source={require("../../assets/images/pic1.png")}
                style={{
                  width: 138,
                  height: 92,
                  resizeMode: "contain",
                }}
              />

              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginLeft: isRtl ? 0 : Default.fixPadding * 2.8,
                  marginRight: isRtl ? Default.fixPadding * 2.8 : 0,
                }}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Bold15black,
                  }}
                >
                  6391 Elgin St. Celina, Mumbai ,Maharashtra
                </Text>
                <View
                  style={{
                    flexDirection: isRtl ? "row-reverse" : "row",
                    alignItems: "center",
                    marginTop: Default.fixPadding * 0.2,
                  }}
                >
                  <Feather name="clock" size={15} color={Colors.grey} />
                  <Text
                    numberOfLines={1}
                    style={{
                      flex: 1,
                      textAlign: isRtl ? "right" : "left",
                      ...Fonts.SemiBold14grey,
                      marginHorizontal: Default.fixPadding * 0.3,
                    }}
                  >
                    15 min/2.5 km
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {mapReady && (
          <MapView
            loadingEnabled={true}
            loadingBackgroundColor={"transparent"}
            loadingIndicatorColor={Colors.primary}
            style={{ flex: 1 }}
            initialRegion={initialMapData}
          >
            <Marker coordinate={coordinates[0]} anchor={{ x: 0.6, y: 0.6 }}>
              <Image
                source={require("../../assets/images/mapMarker.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Marker>
            <Marker coordinate={coordinatesTwo[1]}>
              <Image
                source={require("../../assets/images/marker3.png")}
                style={{
                  width: 38,
                  height: 38,
                }}
              />
            </Marker>

            <Polyline
              coordinates={coordinates}
              strokeWidth={3}
              strokeColor={Colors.primary}
              lineDashPattern={[2, 4]}
            />
            <Polyline
              coordinates={coordinatesTwo}
              strokeWidth={3}
              strokeColor={Colors.primary}
              lineDashPattern={[2, 4]}
            />
          </MapView>
        )}
      </View>
    </View>
  );
};

export default DirectionScreen;
