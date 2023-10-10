import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson1 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <Grid container className='container' >
          <h1 className='services-title'>Introduction to Professional Skills</h1>
          <Grid xs={12} md={5} lg={5} className='left-container'>

            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
            Professional Skills:
            Crucial for work success.
            Employability Skills:
            Valued by employers.
            Workplace Skills:
            Technical, soft, transferable.
            Values & Character:
            Guide behavior, define integrity.
            Examples:
            Values: Honesty, respect, fairness.
            Beliefs: Growth mindset, optimism.
            Attitudes: Positivity, empathy.
            Character Traits: Trustworthiness, responsibility.
            Importance:
            Boost employability, support career growth.
            Development:
            Learn, apply, seek feedback, embrace challenges.
            </div>

          </Grid>

          <Grid xs={12} md={5} lg={5} className='right-container'>

          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="underline" />
          </Grid>
        </div>
    );
  }
}

export default Lesson1;
