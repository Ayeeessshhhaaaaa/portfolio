import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Education from './Components/Education/Education';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
