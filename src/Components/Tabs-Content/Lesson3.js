import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson3 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <Grid container className='container'>
          <h1 className='services-title'>Job Interviews</h1>
          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                CV Essentials: <br />
                Understanding the purpose of a Curriculum Vitae (CV) as a detailed summary of qualifications, experiences, and achievements.<br />
                Interview Techniques: <br />
                Engaging in activities like watching interview videos, compiling questions, and participating in mock interviews to learn effective interview strategies.<br />
                Communication Mastery: <br />
                Emphasizing the importance of both verbal and non-verbal communication skills, including active listening and structuring responses during interviews.<br />
                Certificate Organization: <br />
                Learning how to organize and present certificates professionally during job interviews.<br />
                Interview Preparation: <br />
                Detailed guidance on attire, grooming, and readiness for interviews, including common interview questions and do's and don'ts.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  CV Improvement <br />
                  <hr class="applytext-underline" />
                  Mock Interviews <br />
                  <hr class="applytext-underline" />
                  Language Enhancement <br />
                  <hr class="applytext-underline" />
                  Interview Preparation <br />
                  <hr class="applytext-underline" />
                  Professional Presentation <br />
                  <hr class="applytext-underline" />
                  Preparation and Research <br />
            </div>
          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
              CV Significance: Understanding the pivotal role of a well-structured CV in the job application process and its impact on attracting potential employers.<br />
              Interview Skills: Gaining insights into effective communication, active listening, and proper response structuring for successful interview performances.<br />
              Professionalism: Learning the importance of a professional demeanor, including attire, grooming, and communication, to create a positive impression during interviews.<br />
              Preparation Techniques: Acquiring techniques for thorough interview preparation, including researching companies and understanding job descriptions to align responses effectively.<br />
          </div>
          </Grid>
        </div>
    );
  }
}

export default Lesson3;
