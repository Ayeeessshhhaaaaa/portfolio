import React from 'react';
import './Services.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Services extends React.Component {
  render() {
    return (
        <div className='services-container' id='Services'>
          <Grid container spacing={1}>
          <Grid xs={5} className='left-container'>
          <h1>Services I Offer</h1>
            <p>As a passionate IT enthusiast with a knack for coding and a flair for design, I'm committed to delivering exceptional digital experiences.</p>
          </Grid>
          <Grid xs={6} className='right-container'>
            <div>
            <h2>
            <hr class="custom-hr" />
            UI/UX Design
            <hr class="custom-hr" />
            Graphic Design
            <hr class="custom-hr" />
            Web Development
            <hr class="custom-hr" />
            Software Development
            <hr class="custom-hr" />
            Back-end Development
            </h2>
            </div>
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default Services;
