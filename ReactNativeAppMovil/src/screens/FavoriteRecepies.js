import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react' // Añade useEffect
import Header from "../components/Header";
import RecepieCard from "../components/RecipieCard";
import { favRec } from '../navegation/AppNavigator';
import { useIsFocused } from '@react-navigation/native'; // Para detectar cuando la pantalla está activa

const FavoriteRecepies = () => {
    const isFocused = useIsFocused(); // Detecta cambios de foco
    const [meals, setMeals] = useState(favRec); // Inicializa con favRec

    // Actualiza la lista cuando la pantalla está en foco
    useEffect(() => {
        setMeals([...favRec]);
    }, [isFocused]);

    return (
        <SafeAreaView style={{flex: 1, marginHorizontal:16, marginTop:10}}>
            <Header headerText={"Favorite Recipes"} headIcon={"bookmark"}/>
            <RecepieCard meals={meals} fav={true}/>
        </SafeAreaView>
    )
}

export default FavoriteRecepies