import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Calculator from './components/pages/Calculator';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

