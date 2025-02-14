# Pokédex en Spring Boot

Este proyecto es una API RESTful desarrollada en **Java Spring Boot** que proporciona información sobre los 151 Pokémon de la primera generación. La API permite obtener la lista completa de Pokémon o buscar un Pokémon específico por su ID. Además, se incluye una página web sencilla que consume esta API para mostrar la información de los Pokémon junto con sus imágenes.

---

## Tecnologías Utilizadas

- **Java Spring Boot**: Framework para desarrollar aplicaciones web y APIs RESTful.
- **HTML/CSS/JavaScript**: Para la página web que consume la API.
- **Lombok**: Librería para reducir el código boilerplate en las clases Java.
- **GitHub Sprites**: Imágenes de los Pokémon obtenidas de [PokéAPI](https://pokeapi.co/).

---


---

## Configuración del Proyecto

### Requisitos

1. **Java JDK 11 o superior**.
2. **Maven**: Para gestionar las dependencias y construir el proyecto.
3. **Spring Boot**: Versión 2.7.x o superior.
4. **Navegador web**: Para probar la página web.

### Dependencias

Las dependencias principales del proyecto se encuentran en el archivo `pom.xml`:

```xml
<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Boot DevTools (opcional, para desarrollo) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Lombok (opcional, para reducir código boilerplate) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <scope>provided</scope>
    </dependency>

    <!-- Spring Boot Starter Test (para pruebas) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## Configuración del Servidor
### El archivo application.properties contiene la configuración del servidor:

```
server.port=8080  # Puerto en el que se ejecutará la aplicación
```
Funcionamiento de la API
Endpoints Disponibles
Obtener todos los Pokémon:

Método HTTP: GET

URL: http://localhost:8080/api/pokemon

Respuesta: Lista de todos los Pokémon en formato JSON.

Ejemplo de respuesta:

```
[
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": "Grass/Poison",
        "description": "A strange seed was planted on its back at birth...",
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    ...
]
```
Ejecución del Proyecto
Clonar el repositorio (si está en GitHub).

Compilar y ejecutar:

```
mvn clean install
mvn spring-boot:run
```

Acceder a la API:

Abre tu navegador o usa una herramienta como Postman para probar los endpoints:

http://localhost:8080/api/pokemon

http://localhost:8080/api/pokemon/25

Acceder a la página web:

Abre tu navegador y ve a http://localhost:8080.





