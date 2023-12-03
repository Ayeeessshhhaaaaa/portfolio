import React from 'react';
import './Tab.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

class Lesson8 extends React.Component {
  render() {
    return (
        <div className='Tab-container'>
         <h1 className='services-title'>Abstract Writing</h1>
          <div container className='container'>

          <div className='lessonleft-container'>
            <h2 className='summary-title'>Summary</h2>
            <hr class="underline" />
            <div className='summary-text'>
                    Understanding Abstracts: <br />
                    The content covered the definition and purpose of an abstract—a concise summary that represents the essence of a research paper or thesis.<br />
                    Components of an Abstract: <br />
                    Highlighted the typical sections such as reason for writing, problem statement, methodology, results, and implications.<br />
                    Purpose and Necessity: <br />
                    Discussed why abstracts are crucial for selection by readers and indexing in academic databases, required in various academic submissions like journals, grants, theses, and conference papers.<br />
                    Types of Abstracts: <br />
                    Described the differences between descriptive and informative abstracts.<br />
                    Editing and Precision: <br />
                    Emphasized the importance of precision, clarity, and adherence to word limits while editing abstracts.<br />
            </div>
          </div>


          <div xs={12} md={5} lg={5} className='lessonright-container'>
          <h2 className='summary-title'>How can I Apply Them</h2>
            <hr class="medium-underline" />
            <div className='apply-text'>
                  Sequential Writing <br />
                  <hr class="applytext-underline" />
                  Structural Development <br />
                  <hr class="applytext-underline" />
                  Learning from Models <br />
                  <hr class="applytext-underline" />
                  Revision and Refinement <br />
            </div>
            </div>

            </div>
          

          <h2 className='learned-title'>What I Learned</h2>
          <hr class="medium-underline" />
          <div className='learned-text'>
            Abstract Structure: <br />
            Understanding the critical components and their sequence in constructing a comprehensive yet concise abstract.<br />
            Adaptation to Disciplines: <br />
            Realizing the need to adapt abstracts based on different academic disciplines and their varying emphases.<br />
            Refinement Process: <br />
            Emphasizing the iterative process of refining an abstract to ensure clarity, completeness, and adherence to word limits.<br />
            </div>
          </div>
    );
  }
}

export default Lesson8;
