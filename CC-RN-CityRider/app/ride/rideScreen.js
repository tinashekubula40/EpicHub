import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Default } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MapView, { Marker, Polyline } from "react-native-maps";
import DashedLine from "react-native-dashed-line";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "expo-router";

const { height } = Dimensions.get("window");

const RideScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`rideScreen:${key}`);
  }

  const markerList = [
    {
      key: "1",
      coordinates: {
        latitude: 48.8887741,
        longitude: 2.2269771,
      },
    },
    {
      key: "2",
      coordinates: {
        latitude: 48.7687741,
        longitude: 2.2669771,
      },
    },
    {
      key: "3",
      coordinates: {
        latitude: 48.7887741,
        longitude: 2.2469771,
      },
    },
    {
      key: "4",
      coordinates: {
        latitude: 48.8687741,
        longitude: 2.2669771,
      },
    },
    {
      key: "5",
      coordinates: {
        latitude: 48.8987741,
        longitude: 2.2769771,
      },
    },
    {
      key: "6",
      coordinates: {
        latitude: 48.7887741,
        longitude: 2.3069771,
      },
    },
  ];

  const [coordinates] = useState([
    {
      latitude: 48.8253785,
      longitude: 2.3491663,
    },
    {
      latitude: 48.8550741,
      longitude: 2.2869771,
    },
  ]);

  const [endRideCoordinates] = useState([
    {
      latitude: 48.8550741,
      longitude: 2.2869771,
    },
    {
      latitude: 48.8733785,
      longitude: 2.306166,
    },
  ]);

  const [pause, setPause] = useState(false);

  const [endRide, setEndRide] = useState(false);

  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMapReady(true);
    }, 1000);
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
              alignSelf: isRtl ? "flex-end" : "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{
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
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <View
              style={{
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                maxHeight: height / 1.5,
                backgroundColor: Colors.white,
                ...Default.shadowBtn,
              }}
            >
              {endRide ? (
                <View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                      style={{
                        flexDirection: isRtl ? "row-reverse" : "row",
                        alignItems: "center",
                        marginTop: Default.fixPadding,
                        paddingBottom: Default.fixPadding * 1.6,
                        paddingHorizontal: Default.fixPadding * 2,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          alignItems: isRtl ? "flex-end" : "flex-start",
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{ ...Fonts.Bold18primary }}
                        >
                          {tr("endRide")}
                        </Text>

                        <Text
                          numberOfLines={1}
                          style={{ ...Fonts.SemiBold16black }}
                        >
                          {tr("dropPoint")}
                        </Text>
                      </View>

                      <Image
                        source={require("../../assets/images/pic6.png")}
                        style={{
                          resizeMode: "contain",
                          width: 158,
                          height: 88,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: isRtl ? "row-reverse" : "row",
                        alignItems: "center",
                        paddingHorizontal: Default.fixPadding * 1.5,
                        paddingVertical: Default.fixPadding * 2,
                        marginBottom: Default.fixPadding * 0.5,
                        backgroundColor: Colors.regularGrey,
                      }}
                    >
                      <SimpleLineIcons
                        name="location-pin"
                        size={26}
                        color={Colors.primary}
                      />

                      <View
                        style={{
                          flex: 1,
                          alignItems: isRtl ? "flex-end" : "flex-start",
                          marginHorizontal: Default.fixPadding,
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{ ...Fonts.Bold15black, overflow: "hidden" }}
                        >
                          6391 Elgin St. Celina, Delaware 10299
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
                              marginHorizontal: Default.fixPadding * 0.2,
                            }}
                          >
                            15 min/2.5 km
                          </Text>
                        </View>
                      </View>
                    </View>

                    <Text
                      style={{
                        textAlign: isRtl ? "right" : "left",
                        ...Fonts.SemiBold14primary,
                        marginHorizontal: Default.fixPadding * 2,
                        marginBottom: Default.fixPadding * 2,
                      }}
                    >
                      {tr("makeSurePark")}
                    </Text>
                  </ScrollView>
                  <View
                    style={{
                      flexDirection: isRtl ? "row-reverse" : "row",
                      alignItems: "center",
                      marginHorizontal: Default.fixPadding * 1.1,
                      marginVertical: Default.fixPadding * 2,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setEndRide(false)}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: Default.fixPadding * 1.4,
                        marginHorizontal: Default.fixPadding * 0.9,
                        borderRadius: 5,
                        backgroundColor: Colors.lightRegularGrey,
                        ...Default.shadow,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ ...Fonts.Bold18primary, overflow: "hidden" }}
                      >
                        {tr("back")}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.push("confirm/confirmScreen")}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: Default.fixPadding * 1.4,
                        marginHorizontal: Default.fixPadding * 0.9,
                        borderRadius: 5,
                        backgroundColor: Colors.primary,
                        ...Default.shadow,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ ...Fonts.Bold18white, overflow: "hidden" }}
                      >
                        {tr("confirm")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                      style={{
                        flexDirection: isRtl ? "row-reverse" : "row",
                        alignItems: "center",
                        marginTop: Default.fixPadding,
                        paddingBottom: Default.fixPadding * 1.5,
                        paddingHorizontal: Default.fixPadding * 2,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          alignItems: isRtl ? "flex-end" : "flex-start",
                        }}
                      >
                        <Text style={{ ...Fonts.Bold18black }}>
                          City rider BK2252
                        </Text>
                        <Text
                          style={{
                            ...Fonts.SemiBold14grey,
                            marginTop: Default.fixPadding,
                          }}
                        >
                          {tr("range")}
                        </Text>
                        <Text style={{ ...Fonts.SemiBold16black }}>
                          30-35 km
                        </Text>
                      </View>

                      <Image
                        source={require("../../assets/images/pic6.png")}
                        style={{
                          resizeMode: "contain",
                          width: 158,
                          height: 88,
                        }}
                      />
                    </View>

                    <DashedLine
                      dashGap={2}
                      dashLength={2}
                      dashThickness={1.5}
                      dashColor={Colors.primary}
                    />

                    <View
                      style={{
                        flexDirection: isRtl ? "row-reverse" : "row",
                        alignItems: "center",
                        paddingTop: Default.fixPadding * 2.5,
                        marginHorizontal: Default.fixPadding,
                        marginBottom: Default.fixPadding * 2,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingRight: isRtl ? 0 : Default.fixPadding,
                          paddingLeft: isRtl ? Default.fixPadding : 0,
                        }}
                      >
                        <Image
                          source={require("../../assets/images/battery.png")}
                          style={{
                            width: 22,
                            height: 32,
                            resizeMode: "contain",
                          }}
                        />
                        <Text
                          numberOfLines={1}
                          style={{
                            ...Fonts.Bold16primary,
                            overflow: "hidden",
                            marginTop: Default.fixPadding,
                            marginBottom: Default.fixPadding * 0.4,
                          }}
                        >
                          {tr("batteryLevel")}
                        </Text>
                        <Text style={{ ...Fonts.Bold16black }}>90%</Text>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingHorizontal: Default.fixPadding,
                          borderLeftWidth: 1,
                          borderLeftColor: Colors.lightGrey,
                          borderRightWidth: 1,
                          borderRightColor: Colors.lightGrey,
                        }}
                      >
                        <Image
                          source={require("../../assets/images/clock2.png")}
                          style={{
                            width: 32,
                            height: 32,
                            resizeMode: "contain",
                          }}
                        />
                        <Text
                          numberOfLines={1}
                          style={{
                            ...Fonts.Bold16primary,
                            overflow: "hidden",
                            marginTop: Default.fixPadding,
                            marginBottom: Default.fixPadding * 0.4,
                          }}
                        >
                          {tr("timeUsed")}
                        </Text>
                        <Text style={{ ...Fonts.Bold16black }}>
                          02 : 15 min
                        </Text>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingLeft: isRtl ? 0 : Default.fixPadding,
                          paddingRight: isRtl ? Default.fixPadding : 0,
                        }}
                      >
                        <Ionicons
                          name="navigate"
                          size={32}
                          color={Colors.primary}
                        />
                        <Text
                          numberOfLines={1}
                          style={{
                            ...Fonts.Bold16primary,
                            overflow: "hidden",
                            marginTop: Default.fixPadding,
                            marginBottom: Default.fixPadding * 0.4,
                          }}
                        >
                          {tr("traveled")}
                        </Text>
                        <Text style={{ ...Fonts.Bold16black }}>3.5km</Text>
                      </View>
                    </View>

                    {pause ? (
                      <View
                        style={{
                          flexDirection: isRtl ? "row-reverse" : "row",
                          alignItems: "center",
                          paddingHorizontal: Default.fixPadding * 2,
                          paddingVertical: Default.fixPadding * 0.8,
                          marginBottom: Default.fixPadding * 2,
                          backgroundColor: Colors.regularGrey,
                        }}
                      >
                        <View
                          style={{
                            flex: 7,
                            alignItems: isRtl ? "flex-end" : "flex-start",
                          }}
                        >
                          <Text
                            numberOfLines={1}
                            style={{ ...Fonts.Bold16black }}
                          >
                            {tr("ridePaused")}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{
                              ...Fonts.SemiBold14grey,
                              marginTop: Default.fixPadding * 0.4,
                            }}
                          >
                            {tr("noCost")}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 3,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={require("../../assets/images/clock2.png")}
                            style={{
                              width: 18,
                              height: 18,
                              resizeMode: "contain",
                            }}
                          />
                          <Text
                            numberOfLines={1}
                            style={{
                              ...Fonts.Bold16primary,
                              overflow: "hidden",
                              marginTop: Default.fixPadding * 0.5,
                              marginBottom: Default.fixPadding * 0.2,
                            }}
                          >
                            {tr("pausedTime")}
                          </Text>
                          <Text style={{ ...Fonts.Bold14black }}>
                            01 : 45 min
                          </Text>
                        </View>
                      </View>
                    ) : null}
                  </ScrollView>
                  <View
                    style={{
                      flexDirection: isRtl ? "row-reverse" : "row",
                      alignItems: "center",
                      marginHorizontal: Default.fixPadding * 1.1,
                      marginVertical: Default.fixPadding * 2,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setPause(!pause)}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: Default.fixPadding * 1.4,
                        marginHorizontal: Default.fixPadding * 0.9,
                        borderRadius: 5,
                        backgroundColor: Colors.primary,
                        ...Default.shadow,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ ...Fonts.Bold18white, overflow: "hidden" }}
                      >
                        {pause ? tr("resume") : tr("pause")}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setEndRide(true)}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: Default.fixPadding * 1.4,
                        marginHorizontal: Default.fixPadding * 0.9,
                        borderRadius: 5,
                        backgroundColor: Colors.red,
                        ...Default.shadow,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ ...Fonts.Bold18white, overflow: "hidden" }}
                      >
                        {tr("endRide")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        )}

        {mapReady && (
          <MapView
            initialRegion={{
              latitude: 48.8044716,
              longitude: 2.299014,
              latitudeDelta: 0.1222,
              longitudeDelta: 0.1821,
            }}
            loadingEnabled={true}
            loadingBackgroundColor={"transparent"}
            loadingIndicatorColor={Colors.primary}
            style={{ flex: 1 }}
          >
            {endRide ? (
              <>
                <Polyline
                  coordinates={coordinates}
                  strokeWidth={3}
                  strokeColor={Colors.primary}
                />
                <Marker coordinate={coordinates[0]} anchor={{ x: 0.1, y: 0.1 }}>
                  <View style={styles.mainMarkerCircle}>
                    <View style={styles.subMarkerCircle}>
                      <Ionicons name="ellipse" size={6} color={Colors.white} />
                    </View>
                  </View>
                </Marker>
                <Marker
                  anchor={{ x: 0.5, y: 0.5 }}
                  coordinate={coordinates[1]}
                  image={require("../../assets/images/marker1.png")}
                />
                <Polyline
                  coordinates={endRideCoordinates}
                  strokeWidth={3}
                  strokeColor={Colors.primary}
                  lineDashPattern={[2, 4]}
                />

                <Marker
                  coordinate={endRideCoordinates[1]}
                  anchor={{ x: 0.2, y: 0.5 }}
                >
                  <View style={styles.mainMarkerCircle}>
                    <View style={styles.subMarkerCircle}>
                      <Ionicons name="ellipse" size={5} color={Colors.white} />
                    </View>
                  </View>
                </Marker>
              </>
            ) : (
              <>
                {pause ? null : (
                  <View>
                    <Polyline
                      coordinates={coordinates}
                      strokeWidth={3}
                      strokeColor={Colors.primary}
                    />
                  </View>
                )}
                <Marker coordinate={coordinates[0]} anchor={{ x: 0.1, y: 0.1 }}>
                  <View style={styles.mainMarkerCircle}>
                    <View style={styles.subMarkerCircle}>
                      <Ionicons name="ellipse" size={5} color={Colors.white} />
                    </View>
                  </View>
                </Marker>
                <Marker
                  anchor={{ x: 0.5, y: 0.5 }}
                  coordinate={coordinates[1]}
                  image={require("../../assets/images/marker3.png")}
                />
              </>
            )}

            {markerList.map((item, index) => {
              return (
                <Marker key={index} coordinate={item.coordinates}>
                  <View style={styles.mainMarkerCircle}>
                    <View style={styles.subMarkerCircle}>
                      <Ionicons name="ellipse" size={5} color={Colors.white} />
                    </View>
                  </View>
                </Marker>
              );
            })}
          </MapView>
        )}
      </View>
    </View>
  );
};

export default RideScreen;

const styles = StyleSheet.create({
  mainMarkerCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    ...Default.shadowBtn,
  },
  subMarkerCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: Colors.white,
  },
});
