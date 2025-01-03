import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavTabs from './components/navbar/NavTabs';
import Tracker from './components/pages/Tracker';
import Calculator from './components/pages/Calculator';
import Footer from './components/footer/footer';
import './App.css';


function App() {

  return (
    <Router>
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Navigate to="tracker" />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;