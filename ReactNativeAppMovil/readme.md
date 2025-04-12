# 📱 Let's him coock  

Una aplicación móvil desarrollada en React Native (JavaScript) para explorar, buscar y visualizar recetas de cocina.  

## 🚀 Características  
- **Pantalla de Bienvenida**: Introducción visual con botón para comenzar.  
- **Búsqueda de Recetas**: Busca recetas por nombre, ingredientes o categorías.  
- **Detalles de Receta**: Muestra ingredientes, pasos, tiempo de preparación y más.  

## 🛠 Tecnologías  
- **Frontend**: React Native (JavaScript).  
- **Navegación**: React Navigation (si lo usaste).  
- **Gestión de Estado**: (ej: Context API, Redux, etc.).  
- **API Externa**: (ej: Spoonacular, Edamam, o menciona si es local).  

## 📦 Instalación  
1. Clona el repositorio:  
   ```bash  
   git clone https://github.com/tu-usuario/tu-repositorio.git  
   ```  
2. Instala dependencias:  
   ```bash  
   cd tu-repositorio  
   npm install  
   ```  
3. Ejecuta la app (Android/iOS):  
   ```bash  
   npx react-native run-android  # o run-ios  
   ```  

## 🗂 Estructura de Directorios (Ejemplo)  
```  
src/  
├── components/      # Componentes reutilizables (ej: CardReceta, SearchBar)  
├── screens/         # Vistas de la app  
│   ├── WelcomeScreen.js  
│   ├── SearchScreen.js  
│   └── RecipeDetailScreen.js  
├── navigation/      # Configuración de navegación (Stack, Tab)  
├── assets/          # Imágenes, fuentes, etc.  
└── utils/           # Funciones auxiliares (ej: llamadas a API)  
```  

## 🔍 Uso  
1. **Pantalla de Bienvenida**: Toca "Lets get stared" para ir a la búsqueda.  
2. **Buscar Recetas**: Escribe una receta y filtra resultados.  
3. **Detalles**: Toca una receta para ver instrucciones completas.  