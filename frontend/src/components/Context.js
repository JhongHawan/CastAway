import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';


function Context() {
  return (
    <div>
      <Box>
        <Box className="sectionGradient">
          <Box className="soloHeading">
            <h1 className="bigTitle titleCenter">CONTEXT</h1>
          </Box>
        </Box>
        <Box style={{ textAlign: "center" }}>
          {/* <Box style={{ maxWidth: "800px", margin: "auto"}}> */}
          <Box>
            <ReactCompareImage leftImage="refugee-edit.png" rightImage="immigrant-edit.png" />
          </Box>
        </Box>
        <Box className="sectionGradient">
          <Box className="soloHeading">
            <h2 className="bigTitle titleCenter">STATE OF THE WORLD</h2>
          </Box>
        </Box>
        <Box className="heading1">
          <Grid container spacing={2}>
            <Grid item md={4}>
              <img src="https://via.placeholder.com/300x200.png?text=MAP" />
            </Grid>
            <Grid item>
              <h4>SOMETHING BIG</h4>
              <p>Somebody once told me...</p>
            </Grid>
          </Grid>
        </Box>
        <Box className="sectionGradient">
          <Box className="soloHeading">
            <h2 className="bigTitle titleCenter">MYTHS</h2>
          </Box>
        </Box>
        <Box className="heading1">
          <Grid container spacing={2}>  
            <Grid item sm={4}>
              <ContextCard
                mythTitle="Myth #1"
                mythDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="Myth #2"
                mythDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="Myth #3"
                mythDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="Myth #4"
                mythDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="Myth #5"
                mythDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item sm={4}>
              <ContextCard
                mythTitle="Myth #6"
                mythDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

    </div>
  );
}

export default Context; 
