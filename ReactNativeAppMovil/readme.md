# 📱 App de Recetas 

Una aplicación móvil desarrollada en React Native para explorar recetas de cocina utilizando la API de [TheMealDB](https://www.themealdb.com).

## 🚀 Características
- **Pantalla de Bienvenida**: Diseño atractivo con botón de inicio.
- **Búsqueda de Recetas**: Filtra por categorías o términos específicos.
- **Detalles de Recetas**: Muestra ingredientes, instrucciones e imágenes.
- **Componentes Reutilizables**: Búsqueda, tarjetas de recetas y filtros.

## 🛠 Tecnologías
- **Frontend**: React Native (JavaScript)
- **Navegación**: React Navigation (Stack)
- **Gestión de API**: Axios
- **Iconos**: Expo Vector Icons
- **Animaciones**: React Native Reanimated

## 📦 Estructura de Directorios
```
│   .gitignore
│   App.js
│   app.json
│   index.js
│   package.json
├───assets
│   └───images  # Logos e imágenes estáticas
└───src
    │   constant.js  # Colores, textos fijos
    ├───components  # Componentes reutilizables
    ├───navegation  # Configuración de rutas
    ├───screens     # Tres vistas principales
    └───service     # Lógica de conexión a API
```

## 🔧 Instalación para Desarrollo
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/DearDayz/Lenguaje-Programacion.git
   cd Lenguaje-Programacion/ReactNativeAppMovil
   ```

2. **Instala dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm start  # Inicia Metro Bundler
   ```

4. **Ejecuta en dispositivo/emulador**:
   ```bash
   npm run android  # Para Android
   npm run ios      # Para iOS (requiere macOS)
   ```

### Requisitos Previos:
- Node.js v18+
- Android Studio/Xcode (para emuladores)
- [Expo Go](https://expo.dev/client) (para probar en dispositivo físico)

## 🧩 Dependencias Clave
| Librería               | Uso                              |
|------------------------|----------------------------------|
| `@react-navigation`    | Navegación entre pantallas       |
| `axios`                | Peticiones a la API de recetas   |
| `expo`                 | Entorno de desarrollo cross-platform |
| `react-native-reanimated` | Animaciones fluidas          |

## 🤝 Cómo Contribuir
1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios
4. Ejecuta pruebas locales (`npm start -- --clear` para cache limpio)
5. Haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
6. Push a la rama (`git push origin feature/nueva-funcionalidad`)
7. Abre un Pull Request

## 📌 Notas Importantes
- La app usa la API pública de TheMealDB (no requiere API key)
- Los íconos están en `assets/images`
- La configuración de navegación está en `src/navegation/AppNavigator.js`
- El servicio de API está centralizado en `src/service/api.js`