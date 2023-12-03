import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import poster from '../Assets/poster.jpeg';

class Lesson7 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <Grid container className='container'>
          <h1 className='services-title'>Telephone Etiquettes</h1>
          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                  Importance of first impressions: <br />
                  The first 6 seconds of a call can shape a customer's perception.<br />
                  Statistics highlighting the significance of telephone etiquette.<br />
                  The impact of an upbeat tone and prompt answering on customer satisfaction.<br />
                  Steps to perfect telephone etiquette: <br />
                  Seven key steps discussed in detail.<br />
                  Importance of introductions, use of names, and personalizing conversations.<br />
                  Staying focused, giving full attention to customers, and avoiding distractions.<br />
                  Note-taking strategies and active listening techniques.<br />
                  Avoiding annoying habits like eating or chewing while on the phone.<br />
                  Resolving customer issues promptly during the call.<br />
                  Ending conversations on a positive note and ensuring follow-through on promises made.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Prompt and positive answering <br />
                  <hr class="applytext-underline" />
                  Proper introductions <br />
                  <hr class="applytext-underline" />
                  Job Applications <br />
                  <hr class="applytext-underline" />
                  Proper introductions <br />
                  <hr class="applytext-underline" />
                  Focused attention <br />
                  <hr class="applytext-underline" />
                  Effective note-taking <br />
                  <hr class="applytext-underline" />
                  Resolving issues promptly <br />
                  <hr class="applytext-underline" />
                  Ending on a positive note <br />
            </div>
          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
                The critical impact of first impressions in customer interactions. <br />
                The significance of maintaining focus and active listening during phone conversations. <br />
                The importance of professionalism, follow-through, and resolution in customer service. <br />
                Strategies to maintain a positive and customer-centric approach in all interactions. <br />
          </div>
          <div className='imgCont'> 
              <h2>Poster Made for Telephone Etiquettes</h2>
              <hr class="medium-underline" />
              <br />
              <img className='poster' src={poster} alt='poster' />
          </div>
          </Grid>
        </div>
    );
  }
}

export default Lesson7;
