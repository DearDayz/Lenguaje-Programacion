import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({headerText, headIcon}) => {
    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, fontSize:22, fontWeight:"700"}}>{headerText}</Text>
            <FontAwesome name={headIcon} size={24} color="#f96163" />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({});