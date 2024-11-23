import { useState } from "react";
import * as S from "./style";

import Pokebola from "../../assets/images/pokeball.png"
import Treecko from "../../assets/images/treecko.png"
import Torchic from "../../assets/images/torchic.png"
import Mudkip from "../../assets/images/mudkip.png"


export default function Johto() {

    const [pokemon, setPokemon] = useState(Pokebola); // Inicialmente mostra a Pokébola

    // Função para alterar o Pokémon
    const escolhoVoce = (pokemon) => {
      setPokemon(pokemon);
    };
  return (
    <S.Hoenn>
        <S.Iniciais>
        <h1>3ª Geração - Hoenn</h1>
            <S.Pokeball>
            
            <img className="pokemon" src={pokemon} alt="Pokébola" />

            </S.Pokeball>
            <S.Tipos>
                <button className="agua" onClick={()=> escolhoVoce(Mudkip)} >Água</button>
                <button className="fogo" onClick={()=> escolhoVoce(Torchic)}>Fogo</button>
                <button className="planta" onClick={()=> escolhoVoce(Treecko)}>Planta</button>

            </S.Tipos>
            
        </S.Iniciais>
      
    </S.Hoenn>
  );
}
