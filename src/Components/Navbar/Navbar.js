import React from 'react';
import './Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='mt-5'>
      <ul>
        {location.pathname === '/' ? null : (
        <li><Link to="/portfolio">Home</Link></li>
        )}
        <li><a href="/portfolio#About">About</a></li>
        <li><a href="/portfolio#Services">Services</a></li>
        <li><a href="/portfolio#Projects">Portfolio</a></li>
        <li><a href="/portfolio#Skills">Skills</a></li>
        <li><a href="/portfolio#Contact">Contact</a></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

