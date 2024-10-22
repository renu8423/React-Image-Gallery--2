import { useEffect, useState } from "react";
import axios from "axios";
import './pokemonList.css';
import Pokemon from '../pokemon/pokemon.jsx'

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

//   const Pokedex_url = 'https://pokeapi.co/api/v2/pokemon'; 

  const [Pokedex_url,setpokedex_url]=useState('https://pokeapi.co/api/v2/pokemon');

const [nextUrl, setNextUrl] = useState('');
const [prevUrl,setPrevUrl] = useState('');

  async function downloadPokemon() {
    setIsLoading(true)
    try {
      const response = await axios.get(Pokedex_url); //this is downlode 20 pokemon
      const pokemonResult = response.data.results; //we get the array of pokemnonresult

      console.log(response.data);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      

      //itrate over of pokemons, and using thire url to creat an array of promises
    //   that will downlode those 20 pokemon
      
      const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));  //   passing that promiss array to axios.all

   
      const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data
      
    //   now iterete on the data of each pokemon and extract id ,name,image,type
      const res = pokemonData.map((pokemonData) => {
        const pokemon = pokemonData.data;
        return {
          id: pokemon.id, // Use id for the unique key
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default,
        };
      });
      
      setPokemonList(res);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, [Pokedex_url]);

  return (
    <div className="pokemon-list-wrapper">
    
    <div className="controler">
    <button disabled={prevUrl== undefined} onClick={()=>setpokedex_url(prevUrl)}>Prev</button>
    <button disabled={nextUrl== null} onClick={()=>setpokedex_url(nextUrl)}>Next</button>
</div>
     <div className="pokemon-wraper">
        {isLoading ? 'Loading.....' : (
        pokemonList.map((p) => (
          <Pokemon key={p.id} name={p.name} image={p.image} id={p.id}/> // Use the Pokemon component
        ))
      )}
</div>



    </div>
    
  );
}

export default PokemonList;
