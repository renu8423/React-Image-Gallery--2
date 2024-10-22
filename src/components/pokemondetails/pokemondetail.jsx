import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemondetail.css';

function PokemonDetails() {
  const { id } = useParams(); // Get the Pokemon ID from the URL
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    weight: 0,
    height: 0,
    type: [],
  });

  useEffect(() => {
    const downloadPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default || response.data.sprites.front_default,
          weight: response.data.weight,
          height: response.data.height,
          type: response.data.types.map((t) => t.type.name),
        });
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    downloadPokemon();
  }, [id]); // Ensure `id` is the only dependency

  return (
    <div className="pokemon-detail-wrapper">
 
      <img className="pokemon-image "src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon_name  pokemon-height"><span className="pokemon-detail-name">{pokemon.name}</span> </div>
      <div className="pokemon-height">Height: {pokemon.height}</div>
      <div className="pokemon-height">Weight: {pokemon.weight}</div>
      <div className="pokemon-type">
        {pokemon.type.map((t) => (
          <div  className ="pokemon-height" key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
