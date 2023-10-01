import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Testimonial">Testimonial</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
