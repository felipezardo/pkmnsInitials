import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Kanto from "./Components/Kanto/Kanto"
import Johto from "./Components/Johto/Johto";
import  Hoenn  from "./Components/Hoenn/Hoenn";
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
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Kanto/>}/>
      <Route path="/Johto" element={<Johto/>}/>
      <Route path="/Hoenn" element={<Hoenn/>}/>
    </Routes>
     </BrowserRouter>
    
   
    </>
  )

}