import {BrowserRouter, Routes, Route,useLocation } from "react-router-dom"
import Header from "./Components/Header/Header";
import Kanto from "./Components/Kanto/Kanto"
import Johto from "./Components/Johto/Johto";
import  Hoenn  from "./Components/Hoenn/Hoenn";
import Batalha from "./Components/Batalha/Batalha";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  

  `;


function Layout() {
  const location = useLocation(); // hook para pegar a rota atual, precisa estar fora do App e dentro de um componente filho

  return (
    <>
      {/* Exibe o Header somente se a rota atual NÃO for "/batalha" */}
      {location.pathname !== "/batalha" && <Header />}
      <Routes>
        <Route path="/" element={<Kanto />} />
        <Route path="/Johto" element={<Johto />} />
        <Route path="/Hoenn" element={<Hoenn />} />
        <Route path="/batalha" element={<Batalha />} />
      </Routes>
    </>
  );
}





export default function App() {

 

  return(
    <>
     <GlobalStyle />
     <BrowserRouter>
      <Layout /> {/* Envolvemos tudo dentro do Layout */}
     </BrowserRouter>
    
   
    </>
  )

}

