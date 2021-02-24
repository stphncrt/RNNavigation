import React from "react";
import { View, Text, Button } from "react-native";

const Second = (props) => {
  const userNumber = props.route.params.myNumber;
  const userName = props.route.params.myName;
  const name = props.route.params.selectedValue;
  return (
    <View>
      <Text style={{ fontSize: 40 }}> Second </Text>
      <Text style={{ fontSize: 40 }}> Number : {userNumber} </Text>
      <Text style={{ fontSize: 40 }}> MyName is {userName} </Text>
      <Text style={{ fontSize: 20 }}>
        diğer sayfadan gönderilen isim :{name}
      </Text>

      <Button title="Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default Second;
