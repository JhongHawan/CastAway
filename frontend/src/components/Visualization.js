import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from './BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }, 
  bargraph: {
    color: '#white'
  },
  header: {
    margin: theme.spacing(6)
  }
}));

function Visualization() {
  const classes = useStyles(); 

  return(
   <div className="Visualization">
     <Container>
      <Typography
        component="h2"
        variant="h2"
        color="inherit"
        align="center"
        noWrap
        className={classes.header}
      >
        Visualization Page
      </Typography>
      <main>
        <Grid container spacing={2} justify="center">
          <Grid item xs={4}>
            <BarGraph color="pink" title="Syria"/>
          </Grid>
          <Grid item xs={4}>
            <BarGraph color="blue" title="South Africa"/>
          </Grid>
        </Grid>
      </main>
     </Container>
   </div>
  );
}

export default Visualization; 
