import React from 'react';
import './Skills.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import image2 from '../Assets/1.png';
import image3 from '../Assets/2.png';
import image4 from '../Assets/3.png';
import image5 from '../Assets/4.png';
import image6 from '../Assets/5.png';
import image7 from '../Assets/6.png';
import image8 from '../Assets/7.png';
import image9 from '../Assets/8.png';
import image10 from '../Assets/9.png';
import image11 from '../Assets/10.png';
import image12 from '../Assets/11.png';
import image13 from '../Assets/12.png';

class Skills extends React.Component {
  render() {
    return (
        <div className='skills-container' id='Skills'>
          <Grid container spacing={2}>
          <Grid xs={5} className='left-container1'>
          <h1>Skills and Experience</h1>
            <p className='para'>Welcome to my 'Skills and Experience' section, where I showcase my skills and budding experience in technology, coding, and design. Although my professional journey is in its early stages, I bring a passion for innovation and a commitment to learning.</p>
            <h1>Experience</h1>
            <div>
            <h3>
              <hr class="custom-hr1" />
              <div className='exp' style={{ color: 'dimgray', fontWeight: 'bold' }}>2020-2022</div>
              RayBear Clothing - Dehiwala <br/>
              Data Entry Operator <br/>
              Customer Handling <br/>
              <hr class="custom-hr1" />
              <div className='exp' style={{ color: 'dimgray', fontWeight: 'bold' }}>2019-2020</div>
              Whipped Works - Wellawatte <br/>
              Graphic designer of business materials <br/>
              Product photoshoots and editing <br/>
            </h3>
          </div>
          </Grid>
          <Grid xs={5} className='right-container1'>
            <h1>Skills</h1>
            <div>
  <div className='column'>
    <div className='skill-item'>
      <img className='skill' src={image2} alt='skill' />
      <p>UI/UX</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image3} alt='skill' />
      <p>Java</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image4} alt='skill' />
      <p>JavaScript</p>
    </div>
  </div>
  <div className='column'>
    <div className='skill-item'>
      <img className='skill' src={image5} alt='skill' />
      <p>C Language</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image6} alt='skill' />
      <p>C++ Language</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image7} alt='skill' />
      <p>C# Language</p>
    </div>
  </div>
  <div className='column'>
    <div className='skill-item'>
      <img className='skill' src={image8} alt='skill' />
      <p>HTML </p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image9} alt='skill' />
      <p>CSS</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image10} alt='skill' />
      <p>PHP</p>
    </div>
  </div>
  <div className='column'>
    <div className='skill-item'>
      <img className='skill' src={image11} alt='skill' />
      <p>SQL</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image12} alt='skill' />
      <p>Angular</p>
    </div>
    <div className='skill-item'>
      <img className='skill' src={image13} alt='skill' />
      <p>React</p>
    </div>
  </div>
</div>

          </Grid>
        </Grid>
        </div>
    );
  }
}

export default Skills;
