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
import ui9 from '../Assets/ui9.jpeg';
import ui10 from '../Assets/ui10.jpeg';
import ui11 from '../Assets/ui11.jpeg';
import ui12 from '../Assets/dictionary-image.jpeg';
import ui13 from '../Assets/ui13.png';
import ui14 from '../Assets/ui14.png';
import ui15 from '../Assets/ui15.png';
import ui16 from '../Assets/ui16.png';
import ui17 from '../Assets/ui17.png';
import ui18 from '../Assets/ui18.png';
import ui19 from '../Assets/ui19.png';
import ui20 from '../Assets/ui20.png';
import ui21 from '../Assets/ui21.png';


const data = [
  {
    id: 1,
    title: 'Burgerlicious Website',
    imageUrls: [ui1,ui2,ui3,ui4,ui5,ui6,ui7,ui8],
    demo: 'https://github.com/Ayeeessshhhaaaaa/Burgerlicious'
  },
  {
    id: 2,
    title: 'Euphoria Website',
    imageUrls: [ui13,ui14,ui15,ui16],
    demo: ''
  },
  {
    id: 3,
    title: 'Dictionary App',
    imageUrls: [ui12,ui10,ui11],
    imageUrls: [ui12],
    demo: 'https://github.com/Ayeeessshhhaaaaa/DictionaryApp'
  },
  {
    id: 4,
    title: 'Car-Pal Pro Admin Panel',
    imageUrls: [ui17,ui18,ui19,ui20,ui21],
    demo: 'https://github.com/Ayeeessshhhaaaaa/Carpal-Pro.git'
  },
]


class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container' id='Projects'>
              <h1 className='project-title'>Latest Projects</h1>
              <Grid container className="container">
              {
              data.map(({id, imageUrls, title, demo}) =>{
              return(
              <Grid xs={12} sm={6} md={6} lg={3} key={id} className='container1'>
                <div  className='card'>
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>

                    {imageUrls.map((imageUrl, index) => (
                      <div key={index} className='imgContainer'>
                      <img className='imgContent' src={imageUrl} alt={`project-${index}`} />
                    </div>                    
                    ))}
                      
                    </Carousel>
                    <h3>{title}</h3>
                    <div className='button-container'>
                      <a href={demo} className="github-button" target="_blank" rel="noopener noreferrer">
                        View in Github<AiFillGithub className='icon' />
                      </a>
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
  
