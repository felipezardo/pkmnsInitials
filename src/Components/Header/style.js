import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 10vh;  
  font-size: 1.6rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  ul {
    display: flex;
   justify-content: space-between;
    align-items: center;
    
    width: 30vw;
    list-style: none;
    a{
      text-decoration: none;     
    }
    .meio{
      margin: 0 1em;
    }
    
  }
`;
