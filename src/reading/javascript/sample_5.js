const fetchPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const pokemonList = await response.json();
    return pokemonList;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
  }
};

export default fetchPokemonList;
