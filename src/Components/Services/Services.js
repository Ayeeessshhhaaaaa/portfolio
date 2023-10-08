import React from 'react';
import './Services.css';

class Services extends React.Component {
  render() {
    return (
        <div className='services-container' id='Services'>
          <div className='container'>
          <div className='left-container'>
          <h1>Services I Offer</h1>
            <p>As a passionate IT enthusiast with a knack for coding and a flair for design, I'm committed to delivering exceptional digital experiences.</p>
          </div>
          <div className='right-container'>
            <div>
            <h2>
            <hr class="custom-hr" />
            UI/UX Design
            <hr class="custom-hr" />
            Graphic Design
            <hr class="custom-hr" />
            Web Development
            <hr class="custom-hr" />
            Software Development
            <hr class="custom-hr" />
            Back-end Development
            </h2>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Services;
