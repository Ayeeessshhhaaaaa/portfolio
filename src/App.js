import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
