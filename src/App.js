import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
     
      </BrowserRouter>

    </div>
  )
}

export default App

