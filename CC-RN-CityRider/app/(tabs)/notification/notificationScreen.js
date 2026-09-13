import React, { useState } from "react";
import { Text, View, Dimensions, Animated, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SwipeListView } from "react-native-swipe-list-view";
import SnackbarToast from "../../../components/snackbarToast";
import MyStatusBar from "../../../components/myStatusBar";

const NotificationScreen = () => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`notificationScreen:${key}`);
  }

  const [removeNotificationToast, setRemoveNotificationToast] = useState(false);
  const onDismissToast = () => setRemoveNotificationToast(false);

  const notificationList = [
    {
      key: "1",
      image: require("../../../assets/images/notification1.png"),
      title: "Ride ended",
      description: "You successfully parked Bk2564 at city rider zone.",
      time: "2 min ago",
    },
    {
      key: "2",
      image: require("../../../assets/images/notification2.png"),
      title: "Security deposite",
      description: "Your security deposits amount $50.00 successfully paid",
      time: "4 min ago",
    },
    {
      key: "3",
      image: require("../../../assets/images/notification3.png"),
      title: "Rewards",
      description:
        "Your referral amount $50.00 successfully added in your wallet.",
      time: "10 min ago",
    },
    {
      key: "4",
      image: require("../../../assets/images/notification1.png"),
      title: "Ride ended",
      description: "You successfully parked Bk2564 at city rider zone.",
      time: "12 min ago",
    },
    {
      key: "5",
      image: require("../../../assets/images/notification2.png"),
      title: "Security deposite",
      description: "Your security deposits amount $50.00 successfully paid",
      time: "14 min ago",
    },
    {
      key: "6",
      image: require("../../../assets/images/notification3.png"),
      title: "Rewards",
      description:
        "Your referral amount $50.00 successfully added in your wallet.",
      time: "15 min ago",
    },
  ];

  const rowTranslateAnimatedValues = {};
  notificationList.forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });

  const [notification, setNotification] = useState(
    notificationList.map((NotificationItem, i) => ({
      key: `${i}`,
      image: NotificationItem.image,
      title: NotificationItem.title,
      description: NotificationItem.description,
      time: NotificationItem.time,
    }))
  );

  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    if (
      value < -Dimensions.get("window").width ||
      value > Dimensions.get("window").width
    ) {
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...notification];
        const prevIndex = notification.findIndex((item) => item.key === key);
        newData.splice(prevIndex, 1);
        setNotification(newData);
        setRemoveNotificationToast(true);
      });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: Colors.white }}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            padding: Default.fixPadding,
            marginBottom: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 2,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <Image
            source={item.image}
            style={{
              resizeMode: "contain",
              width: 52,
              height: 52,
              borderRadius: 26,
            }}
          />

          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginHorizontal: Default.fixPadding * 1.7,
            }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
              {item.title}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                ...Fonts.Bold15grey,
                overflow: "hidden",
                textAlign: isRtl ? "right" : "left",
                marginVertical: Default.fixPadding * 0.3,
              }}
            >
              {item.description}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.SemiBold14grey }}>
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHiddenItem = () => (
    <View
      style={{
        flex: 1,
        marginBottom: Default.fixPadding * 2,
        backgroundColor: Colors.red,
      }}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar />
      <Text
        style={{
          ...Fonts.Bold20black,
          textAlign: "center",
          paddingTop: Default.fixPadding * 1.2,
          paddingBottom: Default.fixPadding,
        }}
      >
        {tr("notification")}
      </Text>

      {notification.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: Colors.regularGrey,
            }}
          >
            <Ionicons
              name="notifications-off-outline"
              size={28}
              color={Colors.grey}
            />
          </View>
          <Text
            style={{ ...Fonts.Bold18grey, marginTop: Default.fixPadding * 1.5 }}
          >
            {tr("noNotification")}
          </Text>
        </View>
      ) : (
        <SwipeListView
          data={notification}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          onSwipeValueChange={onSwipeValueChange}
          rightOpenValue={-Dimensions.get("window").width}
          leftOpenValue={Dimensions.get("window").width}
          useNativeDriver={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: Default.fixPadding,
            paddingBottom: Default.fixPadding * 2,
          }}
        />
      )}

      <SnackbarToast
        title={tr("remove")}
        visible={removeNotificationToast}
        onDismiss={onDismissToast}
        style={{ position: "absolute", left: 0, right: 0, bottom: 25 }}
      />
    </View>
  );
};

export default NotificationScreen;
