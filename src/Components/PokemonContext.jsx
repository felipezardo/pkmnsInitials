import { createContext, useContext, useState } from "react";

// Criação do Contexto
const PokemonContext = createContext();

// Provedor do Contexto
export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Pokémon selecionado

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Hook para acessar o Contexto
export const usePokemon = () => useContext(PokemonContext);
