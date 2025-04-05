import { View, Text, Image } from "react-native";
import React from "react";

const RecepieDetailsScreen = ({route}) => {
  const { item } = route.params;
    console.log(item);
  return (
    <View style={{ backgroundColor: "#6f4e37", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            //backgroundColor: "red",
            height: 260,
            width: 260,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={require("../../assets/images/salad.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};

export default RecepieDetailsScreen;
