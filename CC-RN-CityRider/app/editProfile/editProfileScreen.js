import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import SnackbarToast from "../../components/snackbarToast";
import { BottomSheet } from "react-native-btr";
import * as ImagePicker from "expo-image-picker";
import MyStatusBar from "../../components/myStatusBar";
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from "expo-router";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`editProfileScreen:${key}`);
  }

  const [name, setName] = useState("Leslie Alexander");
  const [email, setEmail] = useState("lesliealexander example .com");
  const [number, setNumber] = useState("1234567890");

  const [changeImageBottomSheet, setChangeImageBottomSheet] = useState(false);
  const toggleCloseChangeImage = () => {
    setChangeImageBottomSheet(!changeImageBottomSheet);
  };

  const [pickedImage, setPickedImage] = useState();
  const [removeImage, setRemoveImage] = useState(false);

  const [removeImageToast, setRemoveImageToast] = useState(false);
  const onDismissRemoveImage = () => setRemoveImageToast(false);

  const galleryHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      toggleCloseChangeImage();
    }
  };

  const [cameraNotGranted, setCameraNotGranted] = useState(false);
  const onDismissCameraNotGranted = () => setCameraNotGranted(false);

  const cameraHandler = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      setCameraNotGranted(true);
      return;
    }
    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      toggleCloseChangeImage();
    }
  };

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
          {tr("editProfile")}
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
            alignSelf: "center",
            marginTop: Default.fixPadding * 1.8,
            marginBottom: Default.fixPadding * 2,
          }}
        >
          {!pickedImage ? (
            <View>
              {removeImage ? (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Colors.lightGrey,
                    ...styles.image,
                  }}
                >
                  <Ionicons name="person" size={45} color={Colors.white} />
                </View>
              ) : (
                <Image
                  source={require("../../assets/images/profile.png")}
                  style={styles.image}
                />
              )}
            </View>
          ) : (
            <Image source={{ uri: pickedImage }} style={styles.image} />
          )}

          <TouchableOpacity
            onPress={() => toggleCloseChangeImage()}
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              bottom: 0,
              left: isRtl ? 0 : null,
              right: isRtl ? null : 0,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: Colors.white,
            }}
          >
            <Ionicons name="camera" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Bold16black,
            marginTop: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("name")}
        </Text>
        <View style={styles.textInputCard}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder={tr("enterName")}
            placeholderTextColor={Colors.grey}
            selectionColor={Colors.primary}
            numberOfLines={1}
            style={{
              padding: 0,
              ...Fonts.SemiBold15black,
              textAlign: isRtl ? "right" : "left",
            }}
          />
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Bold16black,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("mobile")}
        </Text>
        <View style={styles.textInputCard}>
          <TextInput
            value={number}
            onChangeText={setNumber}
            keyboardType={"number-pad"}
            selectionColor={Colors.primary}
            placeholder={tr("enterMobile")}
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              ...Fonts.SemiBold15black,
              textAlign: isRtl ? "right" : "left",
            }}
          />
        </View>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Bold16black,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("email")}
        </Text>
        <View style={styles.textInputCard}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder={tr("enterEmail")}
            placeholderTextColor={Colors.grey}
            selectionColor={Colors.primary}
            numberOfLines={1}
            style={{
              padding: 0,
              ...Fonts.SemiBold15black,
              textAlign: isRtl ? "right" : "left",
            }}
          />
        </View>
      </ScrollView>

      <View
        style={{
          margin: Default.fixPadding * 2,
        }}
      >
        <AwesomeButton
          progress
          height={50}
          progressLoadingTime={1000}
          onPress={(next) => {
            setTimeout(() => {
              next();
              navigation.pop();
            }, 1000);
          }}
          raiseLevel={0}
          stretch={true}
          borderRadius={5}
          backgroundShadow={Colors.primary}
          backgroundDarker={Colors.primary}
          backgroundColor={Colors.primary}
        >
          <Text style={{ ...Fonts.Bold18white }}>{tr("update")}</Text>
        </AwesomeButton>
      </View>

      <BottomSheet
        visible={changeImageBottomSheet}
        onBackButtonPress={toggleCloseChangeImage}
        onBackdropPress={toggleCloseChangeImage}
      >
        <View style={styles.bottomSheetMain}>
          <Text
            style={{
              ...Fonts.SemiBold18black,
              textAlign: "center",
              marginBottom: Default.fixPadding * 2,
            }}
          >
            {tr("changeProfile")}
          </Text>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: Default.fixPadding,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={cameraHandler}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ ...styles.circle, backgroundColor: Colors.darkBlue }}
              >
                <Ionicons name="camera" size={24} color={Colors.white} />
              </View>
              <Text
                style={{
                  ...Fonts.Medium16black,
                  marginTop: Default.fixPadding,
                }}
              >
                {tr("camera")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={galleryHandler}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: Default.fixPadding * 2,
              }}
            >
              <View style={{ ...styles.circle, backgroundColor: Colors.green }}>
                <Ionicons name="image" size={24} color={Colors.white} />
              </View>
              <Text
                style={{
                  ...Fonts.Medium16black,
                  marginTop: Default.fixPadding,
                }}
              >
                {tr("gallery")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                toggleCloseChangeImage();
                setRemoveImageToast(!removeImageToast);
                setRemoveImage(true);
                setPickedImage(null);
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ ...styles.circle, backgroundColor: Colors.red }}>
                <Ionicons name="trash" size={24} color={Colors.white} />
              </View>
              <Text
                style={{
                  ...Fonts.Medium16black,
                  marginTop: Default.fixPadding,
                }}
              >
                {tr("remove")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <SnackbarToast
          visible={cameraNotGranted}
          onDismiss={onDismissCameraNotGranted}
          title={tr("deny")}
        />
      </BottomSheet>

      <SnackbarToast
        visible={removeImageToast}
        onDismiss={onDismissRemoveImage}
        title={tr("removeImage")}
      />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  image: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  textInputCard: {
    paddingVertical: Default.fixPadding * 1.2,
    paddingHorizontal: Default.fixPadding * 1.5,
    marginTop: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    marginHorizontal: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  bottomSheetMain: {
    padding: Default.fixPadding * 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.white,
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    ...Default.shadow,
  },
});
