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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 50vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
`;

export const Luta = styled.div`
  height: 40vh;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 5em;
  margin: 8px;
  img{
    height: 20vh;
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
  
  height: 16vh;
  display: flex;
  flex-wrap: wrap;

  button {
    width: 294px;
    height: 4.5rem;
  }
`;
