import React, { useState } from 'react';
import image1 from '../Assets/girl.png'; // Import your image using a relative path
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Tabs, Tab, Paper, Box } from '@mui/material';
import './Education.css';
import Lesson1 from '../Tabs-Content/Lesson1';

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
    <div className='about-container' id='About'>
      <Grid container>
        <Grid xs={12} md={6} lg={5} className='left-container'>
          <h1 className='about-title'>Education</h1>
          <p className='about-text'>
            Throughout my educational journey, I've had the privilege of participating in the Professional Skills Module, guided by Miss Ishara Raviharee Weerasinghe. This module has been instrumental in helping me develop essential professional skills, enriching my academic experience. Below, you'll find a brief overview of my educational journey:
          </p>
        </Grid>
        <Grid xs={12} md={6} lg={6} className='right-container'>
          <img className='image' src={image1} alt='Study' />
        </Grid>
      </Grid>

      {/* Step 4: Render the Material-UI Tabs component */}
      <Paper elevation={1} className="tabs-container">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
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

        </Tabs>
      </Paper>

      <TabPanel value={selectedTab} index={0}>
          <Lesson1 />
      </TabPanel>
      <TabPanel value={selectedTab} index={1} style={{padding: '0px'}}>
           <Lesson1 />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
      <TabPanel value={selectedTab} index={4}>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
      <TabPanel value={selectedTab} index={5}>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
      <TabPanel value={selectedTab} index={6}>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>

    </div>
  );
}

export default Education;