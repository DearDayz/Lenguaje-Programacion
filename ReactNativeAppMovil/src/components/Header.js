import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({headerText, headIcon}) => {

    const handleIconPress = () => {
        Alert.alert(
            "¡Hola!",
            "Has presionado el icono de bookmark",
            [{ text: "OK"}],
        );
    };

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("FavoriteRecepies");
    };

    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, fontSize:22, fontWeight:"700"}}>{headerText}</Text>
            <TouchableOpacity onPress={() => handlePress()}>
                <FontAwesome name={headIcon} size={25} color="#f96163" style={{padding:5}}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({});