package com.lenguajesdeprogramacion.spring.api1.api_pokedex_springboot.controller;

import com.lenguajesdeprogramacion.spring.api1.api_pokedex_springboot.model.Pokemon;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/pokemon")
public class PokedexController {

    // Lista de Pokémon que actúa como una base de datos en memoria
    private List<Pokemon> pokedex = Arrays.asList(
    new Pokemon(1, "Bulbasaur", "Grass/Poison", "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"),
    new Pokemon(2, "Ivysaur", "Grass/Poison", "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"),
    new Pokemon(3, "Venusaur", "Grass/Poison", "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"),
    new Pokemon(4, "Charmander", "Fire", "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"),
    new Pokemon(5, "Charmeleon", "Fire", "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"),
    new Pokemon(6, "Charizard", "Fire/Flying", "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"),
    new Pokemon(7, "Squirtle", "Water", "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"),
    new Pokemon(8, "Wartortle", "Water", "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"),
    new Pokemon(9, "Blastoise", "Water", "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"),
    // Agrega más Pokémon aquí...
    new Pokemon(151, "Mew", "Psychic", "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png")
    );

    // Endpoint para obtener todos los Pokémon
    @GetMapping
    public List<Pokemon> getAllPokemon() {
        return pokedex;
    }

    // Endpoint para obtener un Pokémon por su ID
    @GetMapping("/{id}")
    public Pokemon getPokemonById(@PathVariable int id) {
        return pokedex.stream()
            .filter(pokemon -> pokemon.getId() == id)
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Pokemon not found"));
    }
}
