// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTopNavigator } from "@react-navigation/bottom-tabs";

import { Friends, Timeline, Post } from "./pages";

import First from "./pages/First";
import Second from "./pages/Second";

// "bu bölümü stack screen yapısı var"

const Stack = createStackNavigator();

function MainPost() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TimelinePage" component={Timeline} />
      <Stack.Screen name="PostPage" component={Post} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen
          name="FirstPage"
          component={First}
          options={{ title: "Gönderiler" }}
        />
        <Stack.Screen name="SecondPage" component={Second} />
        <Stack.Screen name="MainPostPage" component={MainPost} />
        <Stack.Screen name="FriendsPage" component={Friends} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createBottomTopNavigator();
// function Router() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="FirstPage" component={First} />
//         <Tab.Screen name="SecondPage" component={Second} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default Router;
