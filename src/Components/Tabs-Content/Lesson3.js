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
            Purpose of a CV: <br />
            A CV is a comprehensive document summarizing qualifications, skills, and experiences, serving as a first impression for potential employers.<br />
            Making a Positive Impression: <br />
            An attention-grabbing CV is well-structured, visually appealing, and free of errors. Clear formatting and concise content are vital.<br />
            Tailoring: <br />
            A tailored CV aligns with the specific job, emphasizing relevant qualifications and experiences. It demonstrates genuine interest and research in the role.<br />
            Importance of Research: <br />
            Researching the company and job description helps identify keywords, improving CV success with applicant tracking systems (ATS).<br />
            CV Structure and Formatting: <br />
            Use clear layout, headings, bullet points, and consistent formatting for readability.<br />
            Essential CV Components: <br />
            Include personal information, professional summary, work experience (reverse chronological order), education, skills, and achievements/awards.<br />
            Avoiding Common Mistakes: <br />
            Be cautious of spelling errors, irrelevant details, verbosity, and formatting inconsistencies.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Self-Reflection <br />
                  <hr class="applytext-underline" />
                  Creating a Tailored CV <br />
                  <hr class="applytext-underline" />
                  Researching <br />
                  <hr class="applytext-underline" />
                  Formatting <br />
                  <hr class="applytext-underline" />
                  Content <br />
                  <hr class="applytext-underline" />
                  Proofreading <br />
            </div>
          </Grid>

          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
          Purpose of a CV (Curriculum Vitae):<br />
          A CV is a comprehensive document summarizing your qualifications, skills, and experiences.<br />
          Making a Positive Impression:<br />
          An effective CV is well-structured and visually appealing.<br />
          Tailoring Your CV:<br />
          A tailored CV aligns with the specific job you're applying for.<br />
          Importance of Research:<br />
          Researching the company and job description helps identify keywords and requirements.<br />
          CV Structure and Formatting:<br />
          A well-structured CV has a clear and organized layout.<br />
          Essential CV Components:<br />
          · Personal Information<br />
          · Professional Summary<br />
          · Work Experience<br />
          · Education<br />
          · Skills<br />
          · Achievements and Awards<br />
          Avoiding Common Mistakes:<br />
          Common mistakes to avoid include spelling and grammatical errors, including irrelevant or outdated information, being overly verbose or too brief, and a lack of consistency in formatting.<br />
          </div>
        </div>
    );
  }
}

export default Lesson3;
