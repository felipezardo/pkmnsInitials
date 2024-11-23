import Header from "./Components/Header/Header";
import Kanto from "./Components/Kanto/Kanto"
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  

  `;

export default function App() {

  return(
    <>
     <GlobalStyle />
    <Header />
    <Kanto />
    </>
  )

}