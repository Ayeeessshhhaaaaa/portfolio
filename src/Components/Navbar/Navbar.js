import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className='mt-5'>
      <ul>
        {location.pathname === '/education' ? (
          <>
          <li><Link to="/portfolio">Home</Link></li>
          </>
        ) : (
          <>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
