import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { meal } = route.params;

  // Extraer ingredientes y medidas (evitando campos vacíos)
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
        ))}
        <Text style={styles.sectionTitle}>Instructions:</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:100
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 16,
    height: 720
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#2c3e50',
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 4,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default RecipeDetailScreen;