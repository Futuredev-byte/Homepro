import React from "react"
import Menu from "./components/nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About Us"
import HelmetWrapper from "./components/resusables/HelmetAsync"
import { ModalProvider } from "./components/context/ModalContext"
import ModalWrapper from "./components/context/ModalContextWrapper"
import Listings from "./pages/Listings"
import Blog from './pages/Blog'
import Contact from "./pages/Contact"
import Dashboard from './components/Dash/dashBoard';
import Login from './pages/auth/login'
import Register from './pages/auth/register'
// import PropertyDetail from "./components/card/PropertyDetail"
// import BlogDetail from "./components/card/BlogDetail"


const App = () =>{
  

  return (
    <>
    <ModalProvider>
      <HelmetWrapper>
      <BrowserRouter>
      <ModalWrapper/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/listings" element={<Listings/>}/>
        {/* <Route path="/property/:id" element={<PropertyDetail />} /> */}
        <Route path="/blog" element={<Blog/>}/>
        {/* <Route path="/blog/:id" element={<BlogDetail/>} /> */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
     </BrowserRouter>
      </HelmetWrapper>
      </ModalProvider>
    </>
  )
}

export default App
