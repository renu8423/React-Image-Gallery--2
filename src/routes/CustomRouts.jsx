import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import Pokemondetails from "../components/pokemondetails/pokemondetail";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<Pokemondetails />} />
    </Routes>
  );
}

export default CustomRoutes;
