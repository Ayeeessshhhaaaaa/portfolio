import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='mt-5'>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Projects">Portfolio</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
