import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";  
import { Touchable } from "react-native";

const WelcomeScreen = ({navigation}) => (

    <View style={styles.container}>
        <Image style={{resizeMode:"contain",width:"100%"}} source={require("../../assets/images/salad.png")}></Image>
        <Text style={{color: "#f96163", fontSize: 22, fontWeight: "bolt"}}>
            Mas de 40 mil recetas</Text>
        <Text style={{color: "#3c44c", fontSize: 42, fontWeight: "bolt", marginTop: 44, marginBottom: 20}}>
            Cook like a chef
        </Text>

        <TouchableOpacity 
        onPress={() => navigation.navigate("RecipeList")}
        style={{backgroundColor: "#f96163", paddingVertical: 18, borderRadius: 18,width: "80%", alignItems: "center"}}>
            <Text style={{fontSize:18,color:"#fff", fontWeight:"700"}}>Empecemos</Text>
        </TouchableOpacity>

    </View>
);

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});