import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson4 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
        <h1 className='services-title'>Portfolio Writing</h1>
          <Grid container className='container'>

          <Grid xs={12} md={5} lg={5} className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
            Uses of Portfolios: <br />
            Explored the multifaceted uses of portfolios, including job applications, career advancement, creative industries, education assessments, teaching, freelancing, performance evaluation, skill demonstration, entrepreneurship, networking, personal branding, and career transitions.<br />
            Types of Portfolios: <br />
            Detailed four main types - Personal, Career/Dossier, Employment, and Assessment Portfolios - each serving distinct purposes in showcasing skills, achievements, and progress.<br />
            Steps to Create Portfolios: <br />
            Outlined comprehensive steps for creating an assessment portfolio, including defining purpose, choosing format, collecting materials, organization, context provision, self-assessment, and regular updates.<br />
            Online Platforms for Portfolios: <br />
            Listed various online sources like LinkedIn, Behance, Google Sites, WordPress, and others as platforms to create and showcase portfolios.<br />
            Writing Portfolios: <br />
            Explored the concept of writing portfolios, their purpose, contents, formats, target audience considerations, and the importance of regular updates.<br />
            </div>
          </Grid>


          <Grid xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
               Portfolio Creation <br />
                  <hr class="applytext-underline" />
                  Utilizing Online Platforms <br />
                  <hr class="applytext-underline" />
                  Writing Portfolios <br />
                  <hr class="applytext-underline" />
                  Regular Updates <br />
                  <hr class="applytext-underline" />
                  Targeted Tailoring <br />
            </div>
          </Grid>

          </Grid>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
              Diverse Portfolio Uses: Understanding the versatile applications of portfolios across various professional contexts.<br />
              Portfolio Types: Grasping the different types of portfolios and their specific purposes in presenting skills and achievements.<br />
              Portfolio Creation Process: Learning the systematic approach to creating an effective portfolio, from defining purpose to providing context and regular updates.<br />
              Online Platforms: Discovering various online platforms and tools available for showcasing portfolios effectively.<br />
              Writing Portfolio Significance: Understanding the significance of writing portfolios, including their purpose, content selection, and audience considerations.<br />
          </div>
        </div>
    );
  }
}

export default Lesson4;
