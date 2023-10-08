import React from 'react';
import './About.css';
import image1 from '../Assets/image1.png'; // Import your image using a relative path
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import CV from '../Assets/CV-AyeshaFazly.pdf'



class About extends React.Component {
  render() {
    return (
      <div className='about-container' id='About'>
        <Grid container>
          <Grid xs={12} md={6} lg={5} className='left-container'>
            <h1 className='about-title'>Unlocking Creativity through Code and Design</h1>
            <p className='about-text'>Hello! I'm Ayesha Fazly, where lines of code and strokes of design collide to create digital magic.</p>


            <div className='about-button'>
            <a href='#Contact'>
            <button className='about-btn'>
              Let’s Talk <span className="material-symbols-outlined">send</span>
            </button>
            </a>

            <a href={CV} download className='btn'>
            <button>
              Download my CV <span className="material-symbols-outlined"> person </span>
            </button>
            </a>
            </div>

            <p className="social-text">
            Check out my

            <div className='social-button-container'>
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
            </div>

            </p>
          </Grid>
          <Grid xs={12} md={6} lg={6} className='right-container'>
            <img className='image' src={image1} alt='Ayesha' />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
