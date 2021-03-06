import { useState } from "react";
import "./App.css";
import { Pokemons } from "./components/Pokemons";
import { Pokemon } from "./components/Pokemon";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  console.log("Selected Pokemon:", selectedPokemon);

  return (
    <div className="App">
      {selectedPokemon ? (
        <Pokemon
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      ) : (
        <Pokemons setSelectedPokemon={setSelectedPokemon} />
      )}
    </div>
  );
}

export default App;
