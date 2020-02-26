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
          This is blank. Add to me plz.
        </Box>
        <Box className="sectionGradient">
          <Box className="soloHeading">
            <h2 className="bigTitle titleCenter">MYTHS</h2>
          </Box>
        </Box>
        <Box className="heading1">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <ContextCard />
            </Grid>
            <Grid item sm={4}>
              <ContextCard />
            </Grid>
            <Grid item sm={4}>
              <ContextCard />
            </Grid>
          </Grid>
        </Box>
      </Box>

    </div>
  );
}

export default Context; 
