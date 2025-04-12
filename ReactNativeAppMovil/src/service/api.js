import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchRecipes = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
      return response.data.meals || []; // Si no hay resultados, retornar array vacío
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  };