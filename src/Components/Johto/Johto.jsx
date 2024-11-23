import { useState } from "react";
import * as S from "./style";

import Pokebola from "../../assets/images/pokeball.png"
import Chikorita from "../../assets/images/chikorita.png"
import Totodile from "../../assets/images/totodile.png"
import Cyndaquil from "../../assets/images/cyndaquil.png"

export default function Johto() {

    const [pokemon, setPokemon] = useState(Pokebola); // Inicialmente mostra a Pokébola

    // Função para alterar o Pokémon
    const escolhoVoce = (pokemon) => {
      setPokemon(pokemon);
    };
  return (
    <S.Johto>
        <S.Iniciais>
        <h1>2ª Geração - Johto</h1>
            <S.Pokeball>
            
            <img className="pokemon" src={pokemon} alt="Pokébola" />

            </S.Pokeball>
            <S.Tipos>
                <button className="agua" onClick={()=> escolhoVoce(Totodile)} >Água</button>
                <button className="fogo" onClick={()=> escolhoVoce(Cyndaquil)}>Fogo</button>
                <button className="planta" onClick={()=> escolhoVoce(Chikorita)}>Planta</button>

            </S.Tipos>
            
        </S.Iniciais>
      
    </S.Johto>
  );
}
