import React from 'react';
import './Projects.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { AiFillGithub } from 'react-icons/ai';
import ui1 from '../Assets/ui1.png';
import ui2 from '../Assets/ui2.png';
import ui3 from '../Assets/ui3.png';
import ui4 from '../Assets/ui4.png';
import ui5 from '../Assets/ui5.png';
import ui6 from '../Assets/ui6.png';
import ui7 from '../Assets/ui7.png';
import ui8 from '../Assets/ui8.png';

const data = [
  {
    id: 1,
    title: 'Burgerlicious Website',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
  {
    id: 2,
    title: 'Euphoria Website',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
  {
    id: 3,
    title: 'Dictionary App',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
  {
    id: 4,
    title: 'Portfolio Website',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
  {
    id: 5,
    title: 'Euphoria Website',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
  {
    id: 6,
    title: 'Dictionary App',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
  {
    id: 7,
    title: 'Portfolio Website',
    imageUrls: [ui1,ui2,ui3,ui4],
    demo: ''
  },
]


class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container' id='Projects'>
              <h1 className='project-title'>Latest Projects</h1>
              <Grid container >
              {
              data.map(({id, imageUrls, title, demo}) =>{
              return(
              <Grid xs={3} key={id} className='container1'>
                <div  className='card'>
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>

                    {imageUrls.map((imageUrl, index) => (
                      <div key={index} className='img'>
                        <img src={imageUrl} alt={`project-${index}`} />
                      </div>
                    ))}
                      
                    </Carousel>
                    <h3>{title}</h3>
                    <div className='button-container'>
                      <button>
                        View in Github<AiFillGithub className='icon' />
                      </button>
                    </div>
                </div>
                </Grid>   
              )
            })
            }
    </Grid>
    </div>
    );
    }
  }
  
  export default Projects;
  
