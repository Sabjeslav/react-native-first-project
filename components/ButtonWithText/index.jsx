import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonWithText = ({ handler, text }) => {
  return (
    <TouchableOpacity onPress={handler} style={styles.btn}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#6b6b6b",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    marginLeft: "auto",
    marginRight: "auto"
  },
});

export default ButtonWithText;
