import React from "react"
import Menu from "./components/nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HelmetWrapper from "./components/resusables/HelmetAsync"

const App = () =>{
  

  return (
    <>
      <HelmetWrapper>
      <BrowserRouter>
     <Menu/>
     <Home/>
     </BrowserRouter>
      </HelmetWrapper>
    </>
  )
}

export default App
