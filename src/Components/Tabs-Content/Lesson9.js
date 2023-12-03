import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson9 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <Grid container className='container'>
          <h1 className='services-title'>Writing a Project Proposal</h1>
          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
            Understanding Project Proposals: <br />
            The content emphasized the importance of clear, targeted project proposals for NGOs to secure funding and achieve their goals effectively.<br />
            Elements of a Proposal: <br />
            It covered various components such as justification, detailed activities, methodology, timelines, and required resources.<br />
            Project Design: <br />
            The lecture also highlighted the project cycle, including phases like research, design, financing, implementation, and evaluation.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                 Enhanced Proposal Writing Skills <br />
                  <hr class="applytext-underline" />
                  Preparatory Work <br />
                  <hr class="applytext-underline" />
                  Project Planning <br />
                  <hr class="applytext-underline" />
                  Effective Proposal Structure <br />
            </div>
          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
            Proposal Structure: Understanding the critical components of a proposal and how each section contributes to the overall effectiveness of the document.<br />
            Preparation Importance: Recognizing the significance of preparatory work, data collection, and research in creating compelling and well-founded proposals.<br />
            Project Planning Skills: Learning to plan projects effectively, considering timelines, resources, and strategies for successful implementation.<br />
            Adaptability: Understanding the need to adapt proposal content based on different contexts, funder requirements, and the target audience.<br />
          </div>
          </Grid>
        </div>
    );
  }
}

export default Lesson9;
