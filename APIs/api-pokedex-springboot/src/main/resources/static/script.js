document.addEventListener("DOMContentLoaded", () => {
    const pokedex = document.getElementById("pokedex");
    const searchInput = document.getElementById("search");

    let allPokemon = []; // Variable para almacenar todos los Pokémon

    // Función para obtener los Pokémon de la API
    function fetchPokemon() {
        fetch("http://localhost:8080/api/pokemon")
            .then(response => response.json())
            .then(data => {
                allPokemon = data; // Guardamos los Pokémon en la variable
                displayPokemon(allPokemon); // Mostramos todos los Pokémon al cargar la página

                // Evento para la búsqueda en tiempo real
                searchInput.addEventListener("input", filterPokemon);
            })
            .catch(error => console.error("Error fetching Pokémon:", error));
    }

    // Función para mostrar los Pokémon en la página
    function displayPokemon(pokemonList) {
        pokedex.innerHTML = ""; // Limpiar la Pokédex antes de mostrar resultados
        pokemonList.forEach(pokemon => {
            const pokemonDiv = document.createElement("div");
            pokemonDiv.className = "pokemon";

            // Agregar la imagen del Pokémon
            const pokemonImage = document.createElement("img");
            pokemonImage.src = pokemon.imageUrl;
            pokemonImage.alt = pokemon.name;

            // Agregar la información del Pokémon
            const pokemonInfo = document.createElement("div");
            pokemonInfo.className = "pokemon-info";
            pokemonInfo.innerHTML = `
                <h2>${pokemon.name} (ID: ${pokemon.id})</h2>
                <p><strong>Tipo:</strong> ${pokemon.type}</p>
                <p><strong>Descripción:</strong> ${pokemon.description}</p>
            `;

            // Agregar la imagen y la información al contenedor
            pokemonDiv.appendChild(pokemonImage);
            pokemonDiv.appendChild(pokemonInfo);

            // Agregar el Pokémon a la Pokédex
            pokedex.appendChild(pokemonDiv);
        });
    }

    // Función para filtrar Pokémon por nombre
    function filterPokemon() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPokemon = allPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm)
        );
        displayPokemon(filteredPokemon);
    }

    fetchPokemon();
});
