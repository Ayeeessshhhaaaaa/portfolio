import React from 'react';
import './About.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

class About extends React.Component {
  render() {
    return (
        <div className='about-container' id='About'>
            <div className='left-container'>
                <h1>Unlocking Creativity through Code and Design</h1>
                <p>Hello! I'm Ayesha Fazly, where lines of code and strokes of design collide to create digital magic.</p>
            </div>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <div className='right-conatiner'>

            </div>
        </div>
    );
  }
}

export default About;