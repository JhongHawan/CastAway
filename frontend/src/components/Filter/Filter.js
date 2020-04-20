import React from 'react';
import Grid from '@material-ui/core/Grid';
import DatePicker from './DatePicker'; 
import FilterOpenSelect from './FilterOpenSelect';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   gridItems: {
      align: 'center'
   }
 }));

const chartTypes = [
   {
      val: 'bar',
      name: 'Bar Graph'
   },
   {
      val: 'pie',
      name: 'Pie Chart'
   }, 
   {  
      val: 'line',
      name: 'Line Graph'
   }
]; 

function Filter(props) {
   const classes = useStyles();
   
   /**
    * * Paginates the data so it can be used in the FilterOpenSelect button. 
    */
   const origCountries = props.origCountries; 
   const formattedOrig = origCountries.map(({ code:val, region, country_name:name }) => ({
      val,
      region,
      name,
    }));

   const destCountries = props.destCountries; 
   const formattedDest = destCountries.map(({ code:val, region, country_name:name }) => ({
      val,
      region,
      name,
    }));

   return (
      <div>
         <Typography color="primary" variant="h3">Data Options</Typography>
         <hr/>
         <Grid 
            container
            spacing={2}
         >
            <Grid item xs={6} className={classes.gridItems}>
               <Typography color="secondary" variant="h5">Chart Type:</Typography>
            </Grid>
            <Grid item xs={6} className={classes.gridItems}>
               <FilterOpenSelect data={chartTypes} label='Chart Type'></FilterOpenSelect>
            </Grid>
            <Grid item xs={6} className={classes.gridItems}>
               <Typography color="secondary" variant="h5">Country of Origin:</Typography>
            </Grid>
            <Grid item xs={6} className={classes.gridItems}>
               <FilterOpenSelect data={formattedOrig} label='Origin'></FilterOpenSelect>
            </Grid>
            <Grid item xs={6} className={classes.gridItems}>
               <Typography color="secondary" variant="h5">Destination Country</Typography>
            </Grid>
            <Grid item xs={6} className={classes.gridItems}>
               <FilterOpenSelect data={formattedDest} label='Destination'></FilterOpenSelect>
            </Grid>
            <Grid item xs={6} className={classes.gridItems}>
               <Typography color="secondary" variant="h5">Dates to Include:</Typography>
            </Grid>
            <Grid container spacing={2} alignContent='flex-end'>
               <Grid item xs={6} className={classes.gridItems}>
                  <DatePicker label='From'></DatePicker>
               </Grid>
               <Grid item xs={6} className={classes.gridItems}>
                  <DatePicker label='To'></DatePicker>
               </Grid>
            </Grid>
         </Grid>
      </div>
   );
}

export default Filter; 