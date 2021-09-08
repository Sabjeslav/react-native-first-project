import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{fontSize: 25, margin: 20}}>Home page</Text>
      <Button
        title={"Upload photo"}
        onPress={() => navigation.navigate("Upload")}
      />
    </View>
  );
};

export default HomeScreen;
