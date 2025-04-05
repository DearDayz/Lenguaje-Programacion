import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipieCard = ({meals}) => {
  const navigation = useNavigation();

  if (!meals || meals.length === 0) {
    return (
      <View style={styles.noResultsContainer}>
        <Text style={styles.noResults}>Search for recipes using the search field</Text>
      </View>
    );
  }

  return (
    <View>
      {meals.length === 0 ? (
        <Text style={styles.noResults}>No se encontraron recetas.</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("RecepieDetails", { meal: item })}
              style={{
                //backgroundColor: colors.COLOR_LIGHT,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                borderRadius: 16,
                marginVertical: 3,
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 26,
                flex: 0.49,
              }}
            >
              <Image
                source={{ uri: item.strMealThumb }}
                style={{ width: 150, height: 150, resizeMode: "cover", borderRadius: 8 }}
              />
              <Text style={styles.mealTitle}>{item.strMeal}</Text>
              {/* Estos campos podrías eliminarlos si no los tienes en la API */}
              <View style={styles.areaContainer}>
                <FontAwesome
                    name="map-marker"
                    size={16}
                    color={colors.COLOR_PRIMARY}
                  />
                <Text style={styles.areaText}>{item.strArea || 'Área no especificada'}</Text>
              </View>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RecipieCard;

const styles = StyleSheet.create({
  mealTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '800',  // Más grueso que 'bold'
    color: '#333',      // Color oscuro para mejor contraste
    textAlign: 'center',
    textTransform: 'capitalize', // Primera letra mayúscula
    letterSpacing: 0.5, // Espaciado entre letras
    fontFamily: 'sans-serif-medium', // Fuente más moderna (Android)
    lineHeight: 22,     // Altura de línea para mejor legibilidad
  },
  
  areaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12
  },
  
  areaText: {
    marginLeft: 6,
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic'
  },
  
  noResults: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  }
});
