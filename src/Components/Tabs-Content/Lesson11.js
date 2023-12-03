import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson10 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
         <h1 className='services-title'>Emotional Intelligence</h1>
          <div container className='container'>
          <div  className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                Emotions: <br />
                Highlighted as complex psychological states comprising subjective experiences, physiological responses, and behavioral reactions. Components include feeling, purposive, and social-expressive aspects.<br />
                Functions of Emotions: <br />
                Explored various functions like aiding survival, adding color to life, adaptation, and facilitating social interactions.<br />
                Emotional Intelligence (EQ) vs. Intellectual Intelligence (IQ): <br />
                Distinguished EQ from IQ, focusing on EQ's role in recognizing, managing emotions in self and others, and its impact on success in complex jobs and relationships.<br />
                Brain Development and Emotional States: <br />
                Explored brain development stages, particularly in adolescents, and how emotional states can impact health, immunity, and decision-making processes.<br />
                Conscious vs. Unconscious Decision-Making: <br />
                Highlighted the significance of unconscious decision-making processes, emotional valence, and the role of the subconscious mind in decision-making.<br />
            </div>
          </div>


          <div xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                 Emotional Awareness <br />
                  <hr class="applytext-underline" />
                  Emotional Intelligence Enhancement <br />
                  <hr class="applytext-underline" />
                  Brain Development Insight <br />
                  <hr class="applytext-underline" />
                  Conscious vs. Unconscious Decision-Making <br />
            </div>
          </div>
          </div>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
                Emotional Components: Understanding the intricate aspects of emotions - feeling, purposive, and social-expressive components.<br />
                Emotional vs. Intellectual Intelligence: Distinguishing between EQ and IQ and recognizing the significance of emotional intelligence in various life aspects.<br />
                Brain Development & Decision-Making: Learning about brain development phases and their effects on emotional control, decision-making, and responses.<br />
                Conscious vs. Unconscious Decision-Making: Understanding the dominance of unconscious processes and their impact on decision-making and emotional valence.<br />
          </div>
          </div>

    );
  }
}

export default Lesson10;
