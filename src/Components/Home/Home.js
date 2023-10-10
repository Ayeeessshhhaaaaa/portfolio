import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
