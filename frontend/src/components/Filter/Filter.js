import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterOpenSelect from './FilterOpenSelect';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   formControl: {
     margin: theme.spacing(1),
     minWidth: 120,
   },
 }));

function Filter(props) {
   const classes = useStyles();

   return (
      <div>
         <Grid container spacing={1} justify="center">
          <Grid item xs={6}>
           
          </Grid>
          <Grid item xs={6}> 
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </div>
   );
}

export default Filter; 