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
        <li><Link to="/">Home</Link></li>
        )}
        <li><a href="/#About">About</a></li>
        <li><a href="/#Services">Services</a></li>
        <li><a href="/#Projects">Portfolio</a></li>
        <li><a href="/#Skills">Skills</a></li>
        <li><a href="/#Contact">Contact</a></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

