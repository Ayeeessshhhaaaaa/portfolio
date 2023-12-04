import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson3 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
        <h1 className='services-title'>Job Interviews</h1>
          <Grid container className='container'>

          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                CV Basics: <br />
                Understanding the importance of a detailed CV to highlight qualifications, experiences, and accomplishments.<br />
                Interview Preparation: <br />
                Learning through activities like watching interview videos, compiling questions, and engaging in mock interviews.<br />
                Communication in Interviews: <br />Emphasizing effective verbal and non-verbal communication, active listening, and structuring responses.<br />
                Organizing Certificates: <br />
                Guidance on creating a well-organized certificate folder for interview presentations.<br />
                Interview Readiness: <br />
                Tips on attire, grooming, and preparing answers for common interview questions.<br />
                Do's and Don'ts: <br />
                Outlining key practices and pitfalls to avoid during interviews.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  CV Creation <br />
                  <hr class="applytext-underline" />
                  Mock Interviews <br />
                  <hr class="applytext-underline" />
                  Language Utilization <br />
                  <hr class="applytext-underline" />
                  Certificate Organization <br />
                  <hr class="applytext-underline" />
                  Interview Etiquette <br />
            </div>
          </Grid>

          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
              CV Significance: Understanding the critical role of a well-constructed CV in job applications.<br />
              Interview Skills: Learning about effective communication, active listening, and structuring responses for interview success.<br />
              Professional Presentation: Gaining insights into presenting certificates and oneself professionally during interviews.<br />
          </div>
        </div>
    );
  }
}

export default Lesson3;
