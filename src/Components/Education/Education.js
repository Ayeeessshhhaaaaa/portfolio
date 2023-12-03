import React, { useState } from 'react';
import image1 from '../Assets/girl.png'; // Import your image using a relative path
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Tabs, Tab, Paper, Box } from '@mui/material';
import './Education.css';
import Lesson1 from '../Tabs-Content/Lesson1';
import Lesson2 from '../Tabs-Content/Lesson2';
import Lesson3 from '../Tabs-Content/Lesson3';
import Lesson4 from '../Tabs-Content/Lesson4';
import Lesson5 from '../Tabs-Content/Lesson5';
import Lesson6 from '../Tabs-Content/Lesson6';
import Lesson7 from '../Tabs-Content/Lesson7';
import Lesson8 from '../Tabs-Content/Lesson8';
import Lesson9 from '../Tabs-Content/Lesson9';
import Lesson10 from '../Tabs-Content/Lesson7';
import Lesson11 from '../Tabs-Content/Lesson7';
import Lesson12 from '../Tabs-Content/Lesson7';



function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Education() {
  // Step 2: Create a state variable to manage the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // Step 3: Define a function to handle tab change events
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className='education-container' id='About'>
      <Grid container>
        <Grid xs={12} md={6} lg={5} className='left-container'>
          <h1 className='about-title'>Education</h1>
          <p className='about-text'>
            Throughout my educational journey, I've had the privilege of participating in the Professional Skills Module, guided by Miss Ishara Raviharee Weerasinghe. This module has been instrumental in helping me develop essential professional skills, enriching my academic experience. Below, you'll find a brief overview of my educational journey:
          </p>
        </Grid>
        <Grid xs={12} md={6} lg={6} className='rightimg-container'>
          <img className='image' src={image1} alt='Study' />
        </Grid>
      </Grid>

      {/* Step 4: Render the Material-UI Tabs component */}
      <Paper elevation={1} className="tabs-container">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="fullWidth" // Use fullWidth variant
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab  label="Lesson 1" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 2" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 3" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 4" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 5" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 6" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 7" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 8" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 9" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 10" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 11" style={{  backgroundColor: '#6B9999', color: 'white' }}/>
          <Tab  label="Lesson 12" style={{  backgroundColor: '#6B9999', color: 'white' }}/>

        </Tabs>
      </Paper>

      <TabPanel value={selectedTab} index={0} style={{padding: '0'}}>
          <Lesson1 />
      </TabPanel>
      <TabPanel value={selectedTab} index={1} style={{padding: '0'}}>
           <Lesson2 />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
      <Lesson3 />
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
      <Lesson4 />
      </TabPanel>
      <TabPanel value={selectedTab} index={4}>
      <Lesson5 />
      </TabPanel>
      <TabPanel value={selectedTab} index={5}>
      <Lesson6 />
      </TabPanel>
      <TabPanel value={selectedTab} index={6}>
      <Lesson7 />
      </TabPanel>
      <TabPanel value={selectedTab} index={7}>
      <Lesson8 />
      </TabPanel>
      <TabPanel value={selectedTab} index={8}>
      <Lesson9 />
      </TabPanel>
      <TabPanel value={selectedTab} index={9}>
      <Lesson10 />
      </TabPanel>
      <TabPanel value={selectedTab} index={10}>
      <Lesson11 />
      </TabPanel>
      <TabPanel value={selectedTab} index={11}>
      <Lesson12 />
      </TabPanel>

    </div>
  );
}

export default Education;
