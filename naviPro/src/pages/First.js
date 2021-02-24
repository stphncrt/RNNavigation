import React, { useState } from "react";

import { View, Text, Button, TextInput } from "react-native";

const number = 15;
const First = (props) => {
  const [name, setName] = useState("");
  console.log("naber");
  return (
    <View>
      <Text style={{ fontSize: 40 }}> First Hello</Text>
      <Text style={{ fontSize: 40 }}> 15</Text>
      <Text style={{ fontWeight: "bold", margin: 5 }}>
        Girilen değer: {name}
      </Text>
      <View
        style={{
          backgroundColor: "#e0e0e0",
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
      >
        <TextInput value={name} onChangeText={(text) => setName(text)} />
      </View>
      <Button
        title="Go!"
        onPress={() =>
          props.navigation.navigate("SecondPage", {
            myNumber: number,
            myName: "stephen",
            selectedValue: name,
          })
        }
      />
      <Button
        title="go mainpost"
        onPress={() => props.navigation.navigate("MainPostPage")}
      />
    </View>
  );
};

export default First;
