import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Post from "../../components/Post";
import { FlatList, StyleSheet, View } from "react-native";
import { fetchPosts } from "../../api/postsService";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then((res) => setPosts(res));
  }, []);

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post key={item.id} post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    width: 100 + "%",
    padding: 20,
  },
});

export default PostsPage;
