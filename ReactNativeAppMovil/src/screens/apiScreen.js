import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { searchRecipes } from '../service/api';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    const results = await searchRecipes(query);
    setMeals(results);
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar recetas (ej. Pizza)"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {meals.length === 0 ? (
          <Text style={styles.noResults}>No se encontraron recetas.</Text>
        ) : (
          meals.map((meal) => (
            <View>
            <TouchableOpacity
              key={meal.idMeal}
              style={styles.mealItem}
              onPress={() => navigation.navigate('RecipeDetail', { meal })}
            >
              <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{meal.strMeal}</Text>
            </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:720
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    margin: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    height: "75vh",

  },
  mealItem: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  mealTitle: {
    padding: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;