import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

import Pokebola from "../../assets/images/pokeball.png"
import Charmander from "../../assets/images/charmander.png"
import Squirtle from "../../assets/images/squirtle.png"
import Bulbasaur from "../../assets/images/bulbasaur.png"


export default function Kanto() {

    const [pokemon, setPokemon] = useState(Pokebola); // Inicialmente mostra a Pokébola

    const navigate = useNavigate(); // Hook para navegação

    // Função para alterar o Pokémon
    const escolhoVoce = (pokemon) => {
      setPokemon(pokemon);
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
                <button className="agua" onClick={()=> escolhoVoce(Squirtle)} >Água</button>
                <button className="fogo" onClick={()=> escolhoVoce(Charmander)}>Fogo</button>
                <button className="planta" onClick={()=> escolhoVoce(Bulbasaur)}>Planta</button>

            </S.Tipos>
            
            {/* Mostrar o botão "Batalhar!" somente se um Pokémon for selecionado */}
        {pokemon !== Pokebola && (
          
          <S.Batalhar onClick={iniciarBatalha}>Batalhar!</S.Batalhar>
        )}

        </S.Iniciais>
      
    </S.Kanto>
  );
}
