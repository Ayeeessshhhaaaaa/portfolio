import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Education from './Components/Education/Education';
import FloatNav from './Components/Float-Navbar/Float-Nav';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <FloatNav />
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
