import * as S from "./style";
import { usePokemon } from "../PokemonContext"; // Importar o contexto

//Pokemons de Kanto - Geração 1
import squirtlePlayer from "../../assets/images/squirtlePlayer.gif";
import squirtleRival from "../../assets/images/squirtleRival.gif";
import charmanderPlayer from "../../assets/images/charmanderPlayer.gif";
import charmanderRival from "../../assets/images/charmanderRival.gif";
import bulbasaurPlayer from "../../assets/images/bulbasaurPlayer.gif";
import bulbasaurRival from "../../assets/images/bulbasaurRival.gif";

export default function Batalha() {
  const { selectedPokemon } = usePokemon(); // Obter os dados do Pokémon selecionado

  // Determina as imagens do Player e do Rival com base no tipo do Pokémon selecionado
  let playerImage, rivalImage, moves;

  switch (selectedPokemon.tipo) {
    case "agua":
      playerImage = squirtlePlayer;
      rivalImage = bulbasaurRival;
      moves = ["Investida", "Cauda D'Água", "Jato D'Água", "Defesa"];
      break;
    case "fogo":
      playerImage = charmanderPlayer;
      rivalImage = squirtleRival;
      moves = ["Arranhão", "Brasa", "Fumaça", "Growl"];
      break;
    case "planta":
      playerImage = bulbasaurPlayer;
      rivalImage = charmanderRival;
      moves = ["Investida", "Chicote de Cipó", "Pó do Sono", "Crescimento"];
      break;
    default:
      playerImage = "";
      rivalImage = "";
      moves = ["Move 1", "Move 2", "Move 3", "Move 4"];
  }

  return (
    <S.batalhaPokemon>
      <S.Gba>
        <h2>Batalha entre Pokémons</h2>
        <S.Luta>
          {/* Exibe as imagens do Player e do Rival */}
          <img className="Player" src={playerImage} alt="Player Pokémon" />
          <img className="Rival" src={rivalImage} alt="Rival Pokémon" />
        </S.Luta>
        <S.Botoes>
          <S.Golpes>
            <S.Descricao>
              <h5>Escolha um golpe para atacar!</h5>
            </S.Descricao>
            <S.Moves>
              {/* Renderiza os botões com os golpes */}
              {moves.map((move, index) => (
                <button key={index}>{move}</button>
              ))}
            </S.Moves>
          </S.Golpes>
          <S.lutarFugir>
            <button className="Lutar">Lutar!</button>
            <button className="fugir">Fugir</button>
          </S.lutarFugir>
        </S.Botoes>
      </S.Gba>
    </S.batalhaPokemon>
  );
}
