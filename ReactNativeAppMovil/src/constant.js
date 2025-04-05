export const colors = {
    COLOR_PRIMARY:"#f96163",
    COLOR_lIGHT:"#FFF",
    COLOR_DARK:"#000",
    COLOR_DARK_LIGHT:"#262626"
}

export const categories = [
  { id: "01", category: "Breakfast" },
  { id: "02", category: "Dinner" },
  { id: "03", category: "Lunch" },
  { id: "04", category: "Asian" },
  { id: "05", category: "Italian"},
  { id: "06", category: "Deserts"},
  { id: "07", category: "Vegetarian"},
  { id: "08", category: "Seafood"},
];

export const recipeList = [
  {
    id: "01",
    name: "Chicken Biryani",
    image: require("../assets/images/salad.png"),
    raiting: "4.2",
    ingredients: ["Chicken","Rice","Spices" , "Vegetables"],
    time: "45 min",
    dificulty: "Medium",
    calories: "500 kcal",
  },
  {
    id: "02",
    name: "Pasta",
    image: require("../assets/images/salad.png"),
    raiting: "4.5",
    ingredients: ["Pasta","Tomato Sauce","Cheese"],
    time: "30 min",
    dificulty: "Easy",
    calories: "400 kcal",
  },
  {
    id: "03",
    name: "Chicken Curry", 
    image: require("../assets/images/salad.png"),
    raiting: "4.8",
    ingredients: ["Chicken","Curry Powder","Vegetables"],
    time: "50 min",
    dificulty: "Medium",
    calories: "600 kcal",
  },
];