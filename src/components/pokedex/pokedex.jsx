import Search from "../search/searc.jsx";
import PokemonList from "../PokemonList/PokemonListt.jsx";
// css import

import './pokedex.css'


function Pokedex (){
return (
    <div className="pokedex-wraper">
 
    <Search/>
    <PokemonList/>
    </div>
)
}



export default Pokedex;