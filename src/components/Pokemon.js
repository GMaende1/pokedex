import { useEffect, useState } from "react";

export function Pokemon({ selectedPokemon, setSelectedPokemon }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const rawPokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
        );
        const pokemonResponse = await rawPokemonResponse.json();

        setPokemon(pokemonResponse);
      } catch (error) {
        setPokemon("error");
      }
    };

    fetchPokemon();
  }, [selectedPokemon]);

  if (!pokemon) {
    return <div>loading...</div>;
  }

  if (pokemon === "error") {
    return (
      <div>
        Error, Pokemon Not Found
        <div>
          <button onClick={() => setSelectedPokemon(null)}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1> {selectedPokemon}</h1>

      <img alt={pokemon.name} src={pokemon.sprites.front_default} />

      <div>
        <button onClick={() => setSelectedPokemon(null)}>Back</button>
      </div>
    </div>
  );
}
