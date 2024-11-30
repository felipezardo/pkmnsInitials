import React, { useState, useEffect } from "react";
import * as S from "./style";
import { usePokemon } from "../PokemonContext";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação

// Pokémons de Kanto - Geração 1
import squirtlePlayer from "../../assets/images/squirtlePlayer.gif";
import squirtleRival from "../../assets/images/squirtleRival.gif";
import charmanderPlayer from "../../assets/images/charmanderPlayer.gif";
import charmanderRival from "../../assets/images/charmanderRival.gif";
import bulbasaurPlayer from "../../assets/images/bulbasaurPlayer.gif";
import bulbasaurRival from "../../assets/images/bulbasaurRival.gif";

export default function Batalha() {
  const { selectedPokemon } = usePokemon();
  const navigate = useNavigate(); // Hook para navegação

  // Determina imagens, golpes e stats iniciais
  let playerImage, rivalImage, playerMoves, rivalMoves, playerName, rivalName;
  let playerStats, rivalStats;

  switch (selectedPokemon.tipo) {
    case "agua":
      playerImage = squirtlePlayer;
      rivalImage = bulbasaurRival;
      playerName = "Squirtle";
      rivalName = "Bulbasaur";
      playerMoves = [
        { name: "Investida", damage: 10 },
        { name: "Cauda D'Água", damage: 20 },
        { name: "Jato D'Água", damage: 15 },
        { name: "Defesa", damage: 0, effect: "defense" },
      ];
      rivalMoves = [
        { name: "Investida", damage: 10 },
        { name: "Chicote de Cipó", damage: 15 },
        { name: "Pó do Sono", damage: 0, effect: "sleep" },
        { name: "Crescimento", damage: 0, effect: "attackUp" },
      ];
      playerStats = { HP: 120, Attack: 10, Defense: 12 };
      rivalStats = { HP: 100, Attack: 8, Defense: 10 };
      break;
    case "fogo":
      playerImage = charmanderPlayer;
      rivalImage = squirtleRival;
      playerName = "Charmander";
      rivalName = "Squirtle";
      playerMoves = [
        { name: "Arranhão", damage: 10 },
        { name: "Brasa", damage: 20 },
        { name: "Fumaça", damage: 5 },
        { name: "Growl", damage: 0, effect: "attackDown" },
      ];
      rivalMoves = [
        { name: "Investida", damage: 10 },
        { name: "Cauda D'Água", damage: 20 },
        { name: "Jato D'Água", damage: 15 },
        { name: "Defesa", damage: 0, effect: "defense" },
      ];
      playerStats = { HP: 100, Attack: 12, Defense: 8 };
      rivalStats = { HP: 120, Attack: 10, Defense: 12 };
      break;
    case "planta":
      playerImage = bulbasaurPlayer;
      rivalImage = charmanderRival;
      playerName = "Bulbasaur";
      rivalName = "Charmander";
      playerMoves = [
        { name: "Investida", damage: 10 },
        { name: "Chicote de Cipó", damage: 15 },
        { name: "Pó do Sono", damage: 0, effect: "sleep" },
        { name: "Crescimento", damage: 0, effect: "attackUp" },
      ];
      rivalMoves = [
        { name: "Arranhão", damage: 10 },
        { name: "Brasa", damage: 20 },
        { name: "Fumaça", damage: 5 },
        { name: "Growl", damage: 0, effect: "attackDown" },
      ];
      playerStats = { HP: 110, Attack: 10, Defense: 10 };
      rivalStats = { HP: 100, Attack: 12, Defense: 8 };
      break;
    default:
      playerImage = "";
      rivalImage = "";
      playerMoves = [];
      rivalMoves = [];
  }

  // Estados
  const [playerHP, setPlayerHP] = useState(playerStats.HP);
  const [rivalHP, setRivalHP] = useState(rivalStats.HP);
  const [description, setDescription] = useState("Escolha um golpe para atacar!");
  const [selectedMove, setSelectedMove] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  // Função para calcular dano
  const calculateDamage = (damage, attackerAttack, defenderDefense) => {
    const baseDamage = damage + attackerAttack - defenderDefense;
    return Math.max(baseDamage, 1); // Dano mínimo de 1
  };

  // Player ataca
  const handlePlayerAttack = () => {
    if (!selectedMove) return;
    const damage = calculateDamage(
      selectedMove.damage,
      playerStats.Attack,
      rivalStats.Defense
    );
    setRivalHP((prev) => Math.max(prev - damage, 0));
    setDescription(
      `${playerName} usou ${selectedMove.name} e causou ${damage} de dano!`
    );

    setButtonsDisabled(true);
    setTimeout(() => handleRivalAttack(), 3000);
  };

  // Rival ataca
  const handleRivalAttack = () => {
    const randomMove = rivalMoves[Math.floor(Math.random() * rivalMoves.length)];
    const damage = calculateDamage(
      randomMove.damage,
      rivalStats.Attack,
      playerStats.Defense
    );
    setPlayerHP((prev) => Math.max(prev - damage, 0));
    setDescription(
      `${rivalName} usou ${randomMove.name} e causou ${damage} de dano!`
    );
    setTimeout(() => setButtonsDisabled(false), 3000);
  };

  // Fim da batalha
  useEffect(() => {
    if (playerHP <= 0) setDescription(`${rivalName} venceu!`);
    if (rivalHP <= 0) setDescription(`${playerName} venceu!`);
  }, [playerHP, rivalHP]);

  // Função de fugir
  const handleFugir = () => {
    const confirmar = window.confirm(
      "Se você fugir, a batalha será perdida. Tem certeza disso?"
    );
    if (confirmar) {
      navigate("/"); // Volta para a página inicial
    }
  };

  return (
    <S.batalhaPokemon>
      <S.Gba>
        <h2>Batalha entre Pokémons</h2>
        <S.Luta>
          <div>
            <div>
              {playerName} HP: {playerHP}
            </div>
            <img className="Player" src={playerImage} alt="Player Pokémon" />
          </div>
          <div>
            <div>
              {rivalName} HP: {rivalHP}
            </div>
            <img className="Rival" src={rivalImage} alt="Rival Pokémon" />
          </div>
        </S.Luta>
        <S.Botoes>
          <S.Golpes>
            <S.Descricao>
              <h5>{description}</h5>
            </S.Descricao>
            <S.Moves>
              {playerMoves.map((move, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMove(move)}
                  disabled={buttonsDisabled}
                >
                  {move.name}
                </button>
              ))}
            </S.Moves>
          </S.Golpes>
          <S.lutarFugir>
            <button
              className="Lutar"
              onClick={handlePlayerAttack}
              disabled={buttonsDisabled || !selectedMove}
            >
              Lutar!
            </button>
            <button className="fugir" onClick={handleFugir}>
              Fugir
            </button>
          </S.lutarFugir>
        </S.Botoes>
      </S.Gba>
    </S.batalhaPokemon>
  );
}
