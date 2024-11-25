import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { usePokemon } from "../PokemonContext"; // Importação do contexto
import Pokebola from "../../assets/images/pokeball.png";
import Charmander from "../../assets/images/charmander.png";
import Squirtle from "../../assets/images/squirtle.png";
import Bulbasaur from "../../assets/images/bulbasaur.png";

export default function Kanto() {
  const [pokemon, setPokemon] = useState(Pokebola); // Estado local para a imagem exibida
  const { setSelectedPokemon } = usePokemon(); // Função do contexto para armazenar o Pokémon escolhido
  const navigate = useNavigate(); // Hook para navegação

  // Função para alterar o Pokémon e salvar no contexto
  const escolhoVoce = (pokemon, tipo) => {
    setPokemon(pokemon); // Atualiza a imagem exibida no Kanto.jsx
    setSelectedPokemon({ image: pokemon, tipo }); // Armazena no contexto o Pokémon e o tipo
  };

  // Função para redirecionar para a página de batalha
  const iniciarBatalha = () => {
    navigate("/batalha");
  };

  return (
    <S.Kanto>
      <S.Iniciais>
        <h1>1ª Geração - Kanto</h1>
        <S.Pokeball>
          <img className="pokemon" src={pokemon} alt="Pokébola" />
        </S.Pokeball>
        <S.Tipos>
          <button
            className="agua"
            onClick={() => escolhoVoce(Squirtle, "agua")}
          >
            Água
          </button>
          <button
            className="fogo"
            onClick={() => escolhoVoce(Charmander, "fogo")}
          >
            Fogo
          </button>
          <button
            className="planta"
            onClick={() => escolhoVoce(Bulbasaur, "planta")}
          >
            Planta
          </button>
        </S.Tipos>

        {/* Mostrar o botão "Batalhar!" somente se um Pokémon for selecionado */}
        {pokemon !== Pokebola && (
          <S.Batalhar onClick={iniciarBatalha}>Batalhar!</S.Batalhar>
        )}
      </S.Iniciais>
    </S.Kanto>
  );
}
