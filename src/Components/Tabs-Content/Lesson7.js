import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson7 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <Grid container className='container'>
          <h1 className='services-title'>Introduction to Professional Skills</h1>
          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
              Professional Skills: <br />
              Crucial for work success. <br />

              Employability Skills: <br />
              Valued by employers. <br />

              Workplace Skills: <br />
              Technical, soft, transferable. <br />

              Values & Character: <br />
              Guide behavior, define integrity. <br />

              Examples: <br />
              Values: Honesty, respect, fairness. <br />
              Beliefs: Growth mindset, optimism. <br />
              Attitudes: Positivity, empathy. <br />
              Character Traits: Trustworthiness, responsibility. <br />

              Importance: <br />
              Boost employability, support career growth. <br />
              
              Development: <br />
              Learn, apply, seek feedback, embrace challenges. <br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Self-Reflection <br />
                  <hr class="applytext-underline" />
                  Skill Enhancement <br />
                  <hr class="applytext-underline" />
                  Job Applications <br />
                  <hr class="applytext-underline" />
                  Interview Preparation <br />
                  <hr class="applytext-underline" />
                  Workplace Behavior <br />
                  <hr class="applytext-underline" />
                  Continuous Learning <br />
                  <hr class="applytext-underline" />
                  Challenge Acceptance <br />
            </div>
          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
          · Professional Skills: We found out that professional skills are those non-technical abilities you need at work, like communication, teamwork, and leadership. <br />
          · Types of Skills: We now know there are technical skills (job-specific), soft skills (communication and more), and transferable skills (useful in various roles). <br />
          · Personal Qualities: We talked about values, beliefs, attitudes, and character traits and how they shape our behavior and choices. <br />
          · Why Skills Matter: We understood why these skills are vital – they boost your chances of getting hired, make you successful at work, and help you advance in your career. <br />
          · Improvement Tips: We got some practical advice on how to develop these skills, like continuous learning and seeking feedback. <br />
          · Course Details: We learned about what's expected in the course, including assessments, attendance rules, and enrolment info. <br />
          </div>
          </Grid>
        </div>
    );
  }
}

export default Lesson7;
