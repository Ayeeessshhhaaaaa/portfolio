import React from 'react';
import './Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {

  return (
<nav className='mt-5'>
  <ul>
    <li><Link to="/portfolio#About" className="nav-link">About</Link></li>
    <li><Link to="/portfolio#Services" className="nav-link">Services</Link></li>
    <li><Link to="/portfolio#Projects" className="nav-link">Portfolio</Link></li>
    <li><Link to="/portfolio#Skills" className="nav-link">Skills</Link></li>
    <li><Link to="/portfolio#Contact" className="nav-link">Contact</Link></li>
    <li><Link to="/education" className="nav-link">Education</Link></li>
  </ul>
</nav>
  );
}

export default Navbar;
