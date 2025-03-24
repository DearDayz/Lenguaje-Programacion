import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CatgoriesFilter from "../components/CatgoriesFilter";

const RecipeListScreen = () => {
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal:16, marginTop:10}}>
            {/* Render Header Component */}
            <Header headerText={"Let him Cock"} headIcon={"bell-o"}/>
            {/* Sarch Filter */}
            <SearchFilter icon = "search" placeholder={"Search for a recipe"}/>
            {/*Categories filter */}
            <View style={{marginTop:22}}>
                <Text style={{fontSize:22,fontWeight: "bold"}}>Categories</Text>
                {/* Categories list */}
                <CatgoriesFilter />
            </View>
        </SafeAreaView>
    )
}

export default RecipeListScreen;

const styles = StyleSheet.create({});