import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getRecipes } from '../service/api';

const HomeScreen = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    const fetchRecipes = async () => {
        const data = await getRecipes();
        setRecipes(data);
    };
    fetchRecipes();
    }, []);

    const renderItem = ({ item }) => (
    <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('RecipeDetail', { id: item.id })}
    >
    <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
    );

    return (
    <View style={styles.container}>
        <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    },
    item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    },
    title: {
    fontSize: 16,
    },
});

export default HomeScreen;