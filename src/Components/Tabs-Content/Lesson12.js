import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson12 extends React.Component {
  render() {
    return (
        <div className='Tab-container'> 
         <h1 className='services-title'>Etiquette, professionalism & connections</h1> <br />
          <h3>Guest Lecture by: Dr BMK Perera</h3>
          
          <div container className='container'>
          <div className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                    Socialization: <br />
                    Understanding the process of acquiring knowledge, language, and social skills to integrate into groups or communities.<br />
                    Acknowledging that socialization continues throughout life, involving adaptation to new roles and situations.<br />
                    Introduction of "scripts" as cognitive frameworks for guiding behavior in specific situations.<br />
                    Etiquette:<br />
                    Defined as a code of behavior reflecting societal norms and expectations.<br />
                    Emphasizes self-reflection to align personal behavior with societal expectations.<br />
                    Importance of first impressions and the impact on social and professional interactions.<br />
                    Specific guidelines for business etiquette, social behavior, and dining.<br />
                    Professionalism and Image:<br />
                    Stresses the significance of personal branding and professionalism in the workplace.<br />
                    Grooming and appearance as elements that influence how one is perceived.<br />
                    The role of body language, speech, and behavior in conveying professionalism.<br />
            </div>
          </div>


          <div xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Self-Reflection <br />
                  <hr class="applytext-underline" />
                  First Impressions <br />
                  <hr class="applytext-underline" />
                  Business Etiquette <br />
                  <hr class="applytext-underline" />
                  Dining Etiquette <br />
                  <hr class="applytext-underline" />
                  Professionalism <br />
            </div>
          </div>
          </div>

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
                Importance of adapting behavior to social norms and situations.<br />
                The impact of first impressions and how quickly judgments are formed.<br />
                Business etiquette nuances, including introductions, business card exchanges, and conversation manners.<br />
                Dining etiquette and its influence on personal and professional impressions.<br />
                Strategies to maintain professionalism, including body language and grooming.<br />
          </div>
          </div>
  
    );
  }
}

export default Lesson12;
