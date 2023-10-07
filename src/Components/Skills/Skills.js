import React from 'react';
import './Skills.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import image1 from '../Assets/1.png';
import image2 from '../Assets/2.png';
import image3 from '../Assets/3.png';
import image4 from '../Assets/4.png';
import image5 from '../Assets/5.png';
import image6 from '../Assets/6.png';
import image7 from '../Assets/7.png';
import image8 from '../Assets/8.png';
import image9 from '../Assets/9.png';
import image10 from '../Assets/10.png';
import image11 from '../Assets/11.png';
import image12 from '../Assets/12.png';

const skill = [
  {
    id: 1,
    Name: 'UI/UX',
    imageUrl: image1
  },
  {
    id: 2,
    Name: 'Java',
    imageUrl: image2
  },
  {
    id: 3,
    Name: 'JavaScript',
    imageUrl: image3
  },
  {
    id: 4,
    Name: 'C Language',
    imageUrl: image4
  },
  {
    id: 5,
    Name: 'C++ Language',
    imageUrl: image5
  },
  {
    id: 6,
    Name: 'C#',
    imageUrl: image6
  },
  {
    id: 7,
    Name: 'HTML',
    imageUrl: image7
  },
  {
    id: 8,
    Name: 'CSS/SCSS',
    imageUrl: image8
  },
  {
    id: 9,
    Name: 'PHP',
    imageUrl: image9
  },
  {
    id: 10,
    Name: 'SQL/NOSQL',
    imageUrl: image10
  },
  {
    id: 11,
    Name: 'Angular',
    imageUrl: image11
  },
  {
    id: 12,
    Name: 'React',
    imageUrl: image12
  }
]

const exp = [
  {
    id: 1,
    date: '2020-2022',
    Name: 'RayBear Clothing - Dehiwala',
    job: 'Data Entry Operator',
    description: 'Customer Handling'
  },
  {
    id: 2,
    date: '2019-2020',
    Name: 'Whipped Works - Wellawatte',
    job: 'Graphic designer of business materials',
    description: 'Product photoshoots and editing'
  }
]

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
              {
                exp.map(({id, date, Name, job, description}) => {
                  return(
                    <div key={id}>
                    <div className='exp' style={{ color: 'dimgray', fontWeight: 'bold' }}>{date}</div>
                    {Name} <br/>
                    {job} <br/>
                    {description} <br/>
                    <hr class="custom-hr1" />
                    </div>
                   )
              })
            }
            </h3>
          </div>
          </Grid>

          <Grid xs={5} className='right-container1'>
            <h1>Skills</h1>
            <div>

            <div className='column'>
              {
               skill.map(({id, Name, imageUrl}) => {
                return(
                  <div key={id} className='skill-item'>
                    <img className='skill' src={imageUrl} alt='skill' />
                    <p>{Name}</p>
                  </div>
                )
               })
              }
            </div>
          </div>
          </Grid>


        </Grid>
        </div>
    );
  }
}

export default Skills;
