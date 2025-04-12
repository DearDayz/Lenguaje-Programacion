import { StyleSheet} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailScreen from "../screens/RecipiesDetails";
import FavoriteRecepies from "../screens/FavoriteRecepies";

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator ScreenOptions={{headerShown: false}}>
            <Stack.Screen name="Let's Him Coock" component={WelcomeScreen} />
            <Stack.Screen name="RecipeList" component={RecipeListScreen} />
            <Stack.Screen name="RecepieDetails" component={RecipeDetailScreen} />
            <Stack.Screen name="FavoriteRecepies" component={FavoriteRecepies} />
        </Stack.Navigator>
    </NavigationContainer>
); 

var favRec=[];

export default AppNavigator;
export {favRec};

const styles = StyleSheet.create({});