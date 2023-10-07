import React from 'react';
import './About.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import image1 from '../Assets/image1.png'; // Import your image using a relative path
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';


class About extends React.Component {
  render() {
    return (
      <div className='about-container' id='About'>
        <Grid container spacing={2}>
          <Grid xs={6} className='left-container'>
            <h1>Unlocking Creativity through Code and Design</h1>
            <p>Hello! I'm Ayesha Fazly, where lines of code and strokes of design collide to create digital magic.</p>
            <a href="#Contact">
            <button>
              Let’s Talk <span className="material-symbols-outlined">send</span>
            </button>
            </a>
            <button>
              Download my CV <span className="material-symbols-outlined"> person </span>
            </button>
            <p className="social-text">
            Check out my

            <a href="https://github.com/Ayeeessshhhaaaaa" target="_blank" rel="noopener noreferrer">
            <div className='card1'>
            <AiFillGithub className='icon' />
            </div>
            </a>

            <a href="https://github.com/Ayeeessshhhaaaaa" target="_blank" rel="noopener noreferrer">
            <div className='card1'>
              <BsLinkedin className='icon' />
            </div>
            </a>

            <a href="https://github.com/Ayeeessshhhaaaaa" target="_blank" rel="noopener noreferrer">
            <div className='card1'>
              <AiFillInstagram className='icon' />
            </div>
            </a>

            <a href="https://github.com/Ayeeessshhhaaaaa" target="_blank" rel="noopener noreferrer">
            <div className='card1'>
              <BiLogoFacebookSquare className='icon' />
            </div>
            </a>


            </p>
          </Grid>
          <Grid xs={4} className='right-container'>
            <img className='image' src={image1} alt='Ayesha' />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
