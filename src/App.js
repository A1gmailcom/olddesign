import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import GlossyBlack from './Components/Glossyblack';
import Minimalisticwhite from './Components/Minimalisticwhite';
import Matteblack from './Components/Matteblack';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glossyblack" element={<GlossyBlack />} /> 
          <Route path="/minimalisticwhite" element={<Minimalisticwhite/>} /> 
          <Route path="/matteblack" element={<Matteblack/>} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
