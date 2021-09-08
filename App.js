import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonWithText from "./components/ButtonWithText";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/homeScreen";
import UploadPhotoScreen from "./screens/uploadPhotoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./screens/postsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./screens/profileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeTab") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Second") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name={"HomeTab"}
          options={{ headerShown: false, title: "Home" }}
        >
          {() => {
            return (
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: "Upload photo" }}
                />
                <Stack.Screen
                  name="Upload"
                  component={UploadPhotoScreen}
                  options={{
                    title: "Upload photo",
                  }}
                />
              </Stack.Navigator>
            );
          }}
        </Tab.Screen>
        <Tab.Screen name={"Second"} options={{ title: "Posts", headerShown: false }}>
          {() => {
            return (
              <Drawer.Navigator initialRouteName="Profile">
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Posts" component={PostsScreen} />
              </Drawer.Navigator>
            );
          }}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
