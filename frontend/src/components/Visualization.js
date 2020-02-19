import React from 'react';
import Grid from '@material-ui/core/Grid';
import BarGraph from './BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }, 
  bargraph: {
    color: '#white'
  }
}));

function Visualization() {
  const classes = useStyles(); 

  return(
   <div className="Visualization">
     <h1>Visualization Page</h1>
     <Grid container spacing={2} justify="center">
       <Grid item xs={4}>
        <BarGraph color="pink" title="Syria"/>
       </Grid>
       <Grid item xs={4}>
        <BarGraph color="blue" title="South Africa"/>
      </Grid>
     </Grid>
     
   </div>
  );
}

export default Visualization; 
