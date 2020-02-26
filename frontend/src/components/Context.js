import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ReactCompareImage from 'react-compare-image';

// images
// import refugeeDef from '../../public/refugee-edit.png';
// import immigrantDef from '../../public/immigrant-edit.png';

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
          <Box style={{ maxWidth: "800px", margin: "auto"}}>
            <ReactCompareImage leftImage="refugee-edit.png" rightImage="immigrant-edit.png" />
          </Box>
        </Box>
      </Box>

    </div>
  );
}

export default Context; 
