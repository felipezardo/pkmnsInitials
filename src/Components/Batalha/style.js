import styled from "styled-components";

export const batalhaPokemon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Gba = styled.div`
  border: solid green;
  width: 50vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
`;

export const Luta = styled.div`
  height: 40vh;
  border: solid blue;
  display: flex;
  justify-content: space-between;
  padding: 5em;
`;

export const Botoes = styled.div`
  border: solid red;
  height: 22vh;
  display: flex;
`;

export const Golpes = styled.div`
  border: solid purple;
  width: 40vw;
  display: flex;
  flex-direction: column;
`;

export const lutarFugir = styled.div`
  border: solid orange;

  display: flex;
  flex-direction: column;
  button {
    width: 150px;
  }
  .Lutar {
    height: 7.9rem;
  }
  .fugir{
    height: 4.5rem;
  }
`;

export const Descricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  height: 5vh;
`;

export const Moves = styled.div`
  border: solid green;
  height: 16vh;
  display: flex;
  flex-wrap: wrap;

  button {
    width: 294px;
    height: 4.5rem;
  }
`;
