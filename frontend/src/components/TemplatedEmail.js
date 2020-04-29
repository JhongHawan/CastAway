import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => {
   
}); 

function TemplatedEmail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        align="center"
      >
      </Grid>
    </div>
  );
}

export default TemplatedEmail; 