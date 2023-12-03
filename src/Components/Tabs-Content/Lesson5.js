import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson5 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <Grid container className='container'>
          <h1 className='services-title'>Speaking Skills</h1>
          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                Terminology in Meetings: <br />
                Understanding the specific language and terms used in meetings to communicate effectively.<br />
                Types of Meetings: <br />
                Identifying various types of professional meetings and their characteristics.<br />
                Planning Meetings: <br />
                Discussing the essential checklist for planning and organizing meetings, including determining objectives, attendees, location, duration, formality, required papers, and anticipating potential issues.<br />
                Contributing Effectively: <br />
                Learning strategies and techniques to contribute effectively during meetings.<br />
                Activity - Leading a Meeting: <br />
                Practicing meeting facilitation by simulating a meeting scenario, assigning roles, discussing improvement strategies, and leading discussions on upgrading a rehabilitation center.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Understanding Meeting Terminology <br />
                  <hr class="applytext-underline" />
                  Types of Meetings <br />
                  <hr class="applytext-underline" />
                  Planning Meetings <br />
                  <hr class="applytext-underline" />
                  Active Contribution <br />
                  <hr class="applytext-underline" />
                  Facilitating Meetings <br />
            </div>
          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
                Meeting Vocabulary: Acquiring terminology and language specific to meetings for clearer communication.<br />
                Meeting Preparation: Understanding the importance of thorough planning and preparation for successful meetings.<br />
                Effective Contribution: Learning techniques to contribute productively and confidently during meetings.<br />
                Facilitation Skills: Practicing leadership skills in conducting and facilitating meetings effectively.<br />
                Problem-Solving in Meetings: Anticipating and addressing potential issues that might arise during meetings.<br />
          </div>
          </Grid>
        </div>
    );
  }
}

export default Lesson5;