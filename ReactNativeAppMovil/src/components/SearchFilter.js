import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        
        shadowColor: "000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" />
      <Text style={{paddingLeft:8, fontSize:16, color:"#808080"}}>{placeholder}</Text>
    </View>
  );
};

export default SearchFilter;
