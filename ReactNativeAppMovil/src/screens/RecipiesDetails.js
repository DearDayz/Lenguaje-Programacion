import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { meal } = route.params;

  // Extraer ingredientes y medidas de forma más eficiente
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`]?.trim(); // Limpiamos espacios
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
    }
  }

  // Dividir instrucciones en pasos numerados
  const instructions = meal.strInstructions
    .split('\r\n')
    .filter(step => step.trim());

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>🍴 {meal.strCategory}</Text>
          <Text style={styles.metaText}>📍 {meal.strArea}</Text>
        </View>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              🟢 {ingredient}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Instructions</Text>
        <View style={styles.instructionsContainer}>
          {instructions.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  metaText: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e74c3c',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 5,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
  },
  ingredient: {
    fontSize: 16,
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: '#2c3e50',
  },
  instructionsContainer: {
    gap: 15,
    marginBottom: 30,
  },
  stepContainer: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e74c3c',
    minWidth: 30,
  },
  stepText: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    flex: 1,
  },
});

export default RecipeDetailScreen;