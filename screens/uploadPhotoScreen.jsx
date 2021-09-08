import React, { useState } from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import ButtonWithText from "../components/ButtonWithText";

const UploadPhotoScreen = ({ navigation }) => {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  let closeShareDialogAsync = () => {
    setSelectedImage(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <ButtonWithText handler={openShareDialogAsync} text={"Share photo"} />
        <ButtonWithText handler={closeShareDialogAsync} text={"Close"} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
      />
      <Text style={styles.textContainer}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
      <ButtonWithText handler={openImagePickerAsync} text={"Pick a photo"} />
      <View>
        <ButtonWithText
          handler={() => navigation.navigate("Home")}
          text={"Go to home page"}
        />
        <ButtonWithText handler={() => navigation.goBack()} text={"Go back"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default UploadPhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  textContainer: {
    color: "#b4b4b4",
    fontSize: 18,
    padding: 20,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 15,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
  thumbnail: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
