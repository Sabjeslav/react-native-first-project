import React from "react";
import { Text, View } from "react-native";
import { fetchPosts } from "../api/postsService";
import PostsContainer from "../containers/PostsContainer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./profileScreen";

const Drawer = createDrawerNavigator();

const PostsScreen = () => {
  return (
    <View>
      <PostsContainer />
    </View>
  );
};

export default PostsScreen;
