import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { FlatList, StyleSheet, View } from "react-native";
import { fetchPosts } from "../../api/postsService";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then((res) => setPosts(res));
  }, []);

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => `list-item-${item.id}`}
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

export default PostsContainer;
