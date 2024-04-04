import axios from "axios";

const BASE_URL = "https://api.pokemontcg.io/v2";

export const getPokemonCardSets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sets`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Pokémon card sets:", error);
    return [];
  }
};
