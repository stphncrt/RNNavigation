import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Post = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Post</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("TimelinePage")}
      >
        <Text
          style={{
            margin: 10,
            fontSize: 30,
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Geri Dön Ne olur
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("FriendsPage")}
      >
        <Text
          style={{
            margin: 10,
            fontSize: 30,
            backgroundColor: "green",
            color: "white",
          }}
        >
          Friends'e git
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export { Post };
