import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson10 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
          <h1 className='services-title'>Negotiation Skills</h1> <br />

          <div container className='container'>
          <h3>Guest Lecture by: Mr. Shenal Rajakarunanayake</h3>
          <div  className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
            Fundamentals of Negotiation: <br />
            Understanding the significance, concepts, and definitions of negotiation across business, personal relationships, and conflict resolution.<br />
            Key Principles: <br />
            Highlighting the importance of achieving win-win outcomes, preserving relationships, resolving conflicts, achieving better agreements, and gaining a competitive advantage through negotiation.<br />
            Scenario Analysis: 
            <br />Presenting a scenario involving project managers competing for limited resources, emphasizing the need for effective negotiation strategies in this context.<br />
            Preparation: <br />
            Emphasizing the importance of thorough preparation, including researching the other party's background, understanding interests, and setting clear goals.<br />
            Influences on Negotiation: <br />
            Discussing how socio-economic, educational backgrounds, legal knowledge, ethics, and cultural sensitivity impact negotiation styles and effectiveness.<br />
            BATNA & ZOPA: <br />
            Explaining the concepts of Best Alternative to a Negotiated Agreement (BATNA) and Zone of Possible Agreement (ZOPA), crucial elements in negotiation strategy.<br />
            </div>
          </div>


          <div xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Thorough Preparation <br />
                  <hr class="applytext-underline" />
                  Understanding Influences <br />
                  <hr class="applytext-underline" />
                  Defining Objectives <br />
                  <hr class="applytext-underline" />
                  BATNA & ZOPA <br />
                  <hr class="applytext-underline" />
                  Effective Communication <br />
            </div>
          </div>
          </div>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
              Negotiation Fundamentals: Understanding the broad concepts, principles, and the significance of negotiation in various aspects of life.<br />
              Preparation and Strategy: Learning the importance of thorough preparation, clear goal-setting, and leveraging strategies like BATNA and ZOPA for successful negotiations.<br />
              Adaptability and Communication: Recognizing the influence of background and culture on negotiation styles and the significance of effective communication in achieving negotiation goals.<br />
              Negotiation Tactics: Learning specific negotiation tactics like building rapport, active listening, maintaining composure, offering creative solutions, and being willing to walk away.<br />
          </div>
          </div>

    );
  }
}

export default Lesson10;
