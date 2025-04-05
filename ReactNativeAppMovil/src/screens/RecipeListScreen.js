import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, {useState } from "react";
import Header from "../components/Header";
//import SearchFilter from "../components/SearchFilter";
import CatgoriesFilter from "../components/CatgoriesFilter";
import RecepieCard from "../components/RecipieCard";
import { searchRecipes } from '../service/api';

const RecipeListScreen = () => {
    const [query, setQuery] = useState('');
    const [meals, setMeals] = useState([]);
    
    const handleSearch = async () => {
        try {
          if (!query.trim()) {
            setMeals([]);
            return;
          }
          const results = await searchRecipes(query);
          setMeals(results || []);
        } catch (error) {
          console.error("Error searching recipes:", error);
          setMeals([]);
        }
      };
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal:16, marginTop:10}}>
            {/* Render Header Component */}
            <Header headerText={"Let him Cock"} headIcon={"handshake-o"}/>
            {/* Sarch Filter */}
            <TextInput
                    style={styles.searchInput}
                    headIcon={"find"}
                    placeholder="Search"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handleSearch}
                    backgroundColor="#fff"
            />
            {/* Recipies List Filter */}
            <View style={{marginTop:22, flex:1}}>
                <Text style={{fontSize:22,fontWeight: "bold"}}>Recepies</Text>
                {/* Recipies list */}
                <RecepieCard meals={meals}/>
            </View>
        </SafeAreaView>
    )
}

export default RecipeListScreen;

const styles = StyleSheet.create({
    searchInput: {
      backgroundColor: "#f2f2f2",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      marginTop: 16,
    },
    noResults: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 16,
      color: "gray",
    }
  });