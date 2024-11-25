import styled from "styled-components";
import Fundo from "../../assets/images/fundo.png"

export const Hoenn = styled.section`
 
 display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: url(${Fundo}); /* Corrigir o uso do background */
  background-size: cover; /* Ajusta a imagem para cobrir toda a área */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição da imagem */


`;

export const Iniciais = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  height: 67vh;
  width: 60vh;
  background-color: white;
  border-radius: 2em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Pokeball = styled.div`

  h1 {
    font-family: "Roboto Mono", monospace;
  }

  img {
    width: 60%;
    margin: 3em;
  }
`;

export const Tipos = styled.div`
margin-top: 1.5em;
display: flex;
justify-content: space-around;


.agua{
    padding: 0.5em 2em;
    background-color: #4592c4;
    border: none;
    color: white;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    font-size:1.2rem;
    cursor: pointer;

}

.fogo{
    padding: 0.5em 2em;
    background-color: #fd7d24;
    border: none;
    color: white;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    font-size:1.2rem;
    cursor: pointer;
}

.planta{
    padding: 0.5em 1.3em;
    background-color: #9bcc50;
    border: none;
    color: white;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    font-size:1.2rem;
    cursor: pointer;
}

`;

export const Batalhar = styled.button`
margin: 1em;
background-color: #EE2D2D;
color: aliceblue;
font-size: 1.8rem;
letter-spacing: 2px;
padding: 0.2em;
border-radius: 10px;
border: none;
cursor: pointer;
font-family: "Roboto Mono", monospace;
&:hover{
  background-color: #C00B0B;
}

`;
