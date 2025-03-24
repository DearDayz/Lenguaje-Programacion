import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={{ resizeMode: "contain", width: "100%" }}
      source={require("../../assets/images/salad.png")}
    ></Image>
    <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bolt" }}>
      More than 40k recipies
    </Text>
    <Text
      style={{
        color: "#3c44c",
        fontSize: 42,
        fontWeight: "bolt",
        marginTop: 30,
        marginBottom: 20,
      }}
    >
      Coock like a chef
    </Text>

    <TouchableOpacity
      onPress={() => navigation.navigate("RecipeList")}
      style={{
        backgroundColor: "#f96163",
        paddingVertical: 18,
        borderRadius: 18,
        width: "80%",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
        Let's get started
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.navigate("apiScreen")}
      style={{
        backgroundColor: "#f96163",
        paddingVertical: 18,
        marginTop: 5,
        borderRadius: 18,
        width: "80%",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
        API
      </Text>
    </TouchableOpacity>
  </View>
);

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
