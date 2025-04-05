import { StyleSheet} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipiesDetails";
import apiScreen from "../screens/apiScreen";
import RecipieDetailsScreen from "../screens/RecipiesDetails";

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator ScreenOptions={{headerShown: false}}>
            <Stack.Screen name="Let's Him Coock" component={WelcomeScreen} />
            <Stack.Screen name="RecipeList" component={RecipeListScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
            <Stack.Screen name="apiScreen" component={apiScreen} />
            <Stack.Screen name="RecepieDetails" component={RecipieDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
); 

export default AppNavigator;

const styles = StyleSheet.create({});