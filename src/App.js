import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/navbar/NavTabs';
import Home from './components/pages/Home';
import Tracker from './components/pages/Tracker';
import Calculator from './components/pages/Calculator';
import Contact from './components/pages/Contact';
import Footer from './components/footer/footer';
import './App.css';


function App() {

  return (
    <Router>
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;