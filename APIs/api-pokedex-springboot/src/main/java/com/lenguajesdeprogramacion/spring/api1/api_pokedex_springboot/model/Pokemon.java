package com.lenguajesdeprogramacion.spring.api1.api_pokedex_springboot.model;

// Importa la anotación Data de Lombok, que genera automáticamente getters, setters, toString, equals y hashCode
import lombok.Data;

// Anotación Lombok para generar automáticamente los métodos mencionados anteriormente
@Data
public class Pokemon {
    // Identificador único del Pokémon
    private int id;
    // Nombre del Pokémon
    private String name;
    // Tipo del Pokémon (por ejemplo, fuego, agua, planta, etc.)
    private String type;
    // Descripción del Pokémon
    private String description;
    private String imageUrl; // Nueva propiedad para la URL de la imagen

    // Constructor de la clase Pokemon que inicializa todos los atributos
    public Pokemon(int id, String name, String type, String description, String imageUrl) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.imageUrl = imageUrl;

    }

    // Getters y setters generados automáticamente por Lombok
}
