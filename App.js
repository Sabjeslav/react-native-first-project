import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import PostsPage from "./Pages/PostsPage";

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return ;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) return;
    setSelectedImage({localUri: pickerResult.uri});
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Uh oh, sharing isn\'t available on your platform');
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  }

  let closeShareDialogAsync = () => {
    setSelectedImage(null);
  }

  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  if (selectedImage !== null) {
    return (
        <View style={styles.container}>
          <Image source={{uri: selectedImage.localUri}} style={styles.thumbnail} />
          <TouchableOpacity onPress={openShareDialogAsync} style={styles.btn}>
            <Text style={styles.btnText}>Share this photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeShareDialogAsync} style={styles.btn}>
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
        </View>
    )
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
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
        <Text style={styles.btnText}>Pick a photo</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setText(text)}
        placeholder={"Enter your text here"}
      />
      {/*<PostsPage />*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
  btn: {
    backgroundColor: "#6b6b6b",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
  },
  textInput: {
    fontSize: 15,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#000"
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
