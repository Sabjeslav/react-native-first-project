import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Post({ post }) {

  return (
    <View style={styles.postContainer}>
      <View>
        <Text style={styles.header}>Title: </Text>
        <Text style={styles.content}>{post.title}</Text>
      </View>
      <View>
        <Text style={styles.header}>Description: </Text>
        <Text style={styles.content}>{post.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
  },
  header: {
    fontWeight: "bold",
  },
  content: {
    marginBottom: 10,
  },
});
