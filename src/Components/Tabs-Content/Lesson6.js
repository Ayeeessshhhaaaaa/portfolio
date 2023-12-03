import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson6 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <h1 className='services-title'>Email Etiquettes</h1>
          <div container className='container'>

          <div className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                Basic Email Setup: <br />
                Use your official email for academic and professional communication. Ensure your settings reflect your English name. Also, set up a professional signature with necessary contact information.<br />
                Subject Lines: <br />
                Emphasize clarity and relevance in the subject line. Avoid generic greetings and use keywords for easy searching.<br />
                Greetings and Closings: <br />
                Use appropriate salutations like "Dear Professor" or "Dear Ms./Mr." Avoid casual closings and maintain a professional tone.<br />
                Tone in Emails: <br />
                Emphasize politeness and clarity in your tone. Avoid demanding language and blaming; instead, use modals and courteous language.<br />
                Templates for Various Scenarios: <br />
                Templates were provided for absence explanations, appointment requests, seeking advice, feedback requests, and more<br />
            </div>
          </div>


          <div xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Email Setup <br />
                  <hr class="applytext-underline" />
                  Subject Lines <br />
                  <hr class="applytext-underline" />
                  Greetings and Closings <br />
                  <hr class="applytext-underline" />
                  Tone in Emails <br />
                  <hr class="applytext-underline" />
                  Template Usage <br />
            </div>
          </div>

          </div>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
          Professionalism: Understanding the importance of professionalism in email communication, including appropriate language, tone, and formatting.<br />
          Clarity and Relevance: Emphasizing the significance of clear, concise subject lines and relevant content in emails for effective communication.<br />
          Politeness and Respect: Learning to convey requests or inquiries politely, respecting the recipient's time and position.<br />
          Structured Communication: Understanding the structure of various types of professional emails, including appropriate introductions, requests, and closings.<br />
          Email Etiquette: Grasping the essential elements of email etiquette, such as avoiding casual language, using appropriate salutations, and following up professionally.<br />
          </div>
          </div>
    );
  }
}

export default Lesson6;
