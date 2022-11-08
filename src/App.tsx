import React from 'react';
import Navbar from './Components/estaticos/navbar/Navbar';
import Footer from './Components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;