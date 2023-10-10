import React from 'react';
import './Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='mt-5'>
      <ul>
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
