import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Friends = (props) => {
  return (
    <View>
      <Text style={{ fondSize: 50 }}>Friends</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("FirstPage")}>
        <Text
          style={{
            margin: 10,
            fontSize: 30,
            backgroundColor: "green",
            color: "white",
          }}
        >
          Başlangıç'a git
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { Friends };
