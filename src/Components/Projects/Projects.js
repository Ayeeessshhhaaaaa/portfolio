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


class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container' id='Projects'>
              <h1 className='project-title'>Latest Projects</h1>
              <Grid container >
              <Grid xs={3} className='container1'>
  <div  className='card'>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        <div className='img'>
          <img src={ui1} alt='project' />
        </div>
        <div className='img'>
          <img src={ui2} alt='project' />
        </div>
        <div className='img'>
          <img src={ui3} alt='project' />
        </div>
        <div className='img'>
          <img src={ui4} alt='project' />
        </div>
        <div className='img'>
          <img src={ui5} alt='project' />
        </div>
        <div className='img'>
          <img src={ui6} alt='project' />
        </div>
        <div className='img'>
          <img src={ui7} alt='project' />
        </div>
        <div className='img'>
          <img src={ui8} alt='project' />
        </div>
      </Carousel>
      <h3>Burgerlicious Website</h3>
      <button>
        View in Github<AiFillGithub className='icon' />
       </button>
      <div className="portfolio_item-cta">
      </div>
   </div>
  </Grid>   

  <Grid xs={3} className='container1'>
  <div  className='card'>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        <div className='img'>
          <img src={ui1} alt='project' />
        </div>
        <div className='img'>
          <img src={ui2} alt='project' />
        </div>
        <div className='img'>
          <img src={ui3} alt='project' />
        </div>
      </Carousel>
      <h3>Euphoria Website</h3>
      <button>
        View in Github<AiFillGithub className='icon' />
       </button>
      <div className="portfolio_item-cta">
      </div>
    </div>
  </Grid>
  
  <Grid xs={3} className='container1'>
  <div  className='card'>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        <div className='img'>
          <img src={ui1} alt='project' />
        </div>
        <div className='img'>
          <img src={ui2} alt='project' />
        </div>
        <div className='img'>
          <img src={ui3} alt='project' />
        </div>
      </Carousel>
      <h3>Dictionary App</h3>
      <button>
        View in Github<AiFillGithub className='icon' />
       </button>
      <div className="portfolio_item-cta">
      </div>
</div>
  </Grid>

  <Grid xs={3} className='container1'>
  <div  className='card'>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        <div className='img'>
          <img src={ui1} alt='project' />
        </div>
        <div className='img'>
          <img src={ui2} alt='project' />
        </div>
        <div className='img'>
          <img src={ui3} alt='project' />
        </div>
      </Carousel>
      <h3>Portfolio Website</h3>
      <button>
        View in Github<AiFillGithub className='icon' />
       </button>
      <div className="portfolio_item-cta">
      </div>
    </div>
  </Grid>

</Grid>
</div>
    );
    }
  }
  
  export default Projects;
  
