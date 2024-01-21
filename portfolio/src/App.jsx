import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects/*" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>

          </Routes>
      </Router>
   
    </>
    
  )
}

export default App
