import React from "react";
import { Button, Text, TouchableOpacity, View, FlatList } from "react-native";

const post_data = [];

const Timeline = (props) => {
  const zıpla = () => props.navigation.navigate("PostPage");
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Timeline</Text>
      <TouchableOpacity style={{ borderRadius: 5 }} onPress={zıpla}>
        <Text
          style={{
            fontSize: 30,
            backgroundColor: "#c0e888",
            borderRadius: 10,
            margin: 10,
          }}
        >
          zıpla posta
        </Text>
      </TouchableOpacity>
      <FlatList data={post_data} renderItem />
    </View>
  );
};

export { Timeline };
