import styled from "styled-components";

export const batalhaPokemon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Gba = styled.div`
  border-radius: 25px;
  padding: 15px;
 
  width: 50vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
`;

export const Luta = styled.div`
  height: 40vh;
  
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 5em;
  margin: 8px;
  img{
   height:15vh;
  }

`;

export const Botoes = styled.div`
 
  height: 22vh;
  display: flex;
`;

export const Golpes = styled.div`
 
  width: 40vw;
  display: flex;
  flex-direction: column;
`;

export const lutarFugir = styled.div`


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
  
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  button {
    width: 13rem;
    height: 3rem;
  }
`;
