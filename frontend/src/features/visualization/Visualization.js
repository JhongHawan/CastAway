import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from '../../components/Charts/BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import VisualizationForm from '../../components/Filter/VisualizationForm'; 
import apiCalls from './apiCalls'; 

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
  
  const dispatch = useDispatch();

  const { 
    refugeeData, 
    unhcrSubData, 
    unhcrDemoData, 
    origCountries, 
    destCountries, 
    loading } = useSelector(
    (state) => {
      return {
        // It has to refer to the state of the reducer which in this case has name
        // refugee. So it's not state.refugees but state.refugee.refugees
        refugeeData: state.refugee.refugees,
        unhcrSubData: state.unhcrSub.data,
        unhcrDemoData: state.unhcrDemo.data,
        origCountries: state.validCountries.origCountries, 
        destCountries: state.validCountries.destCountries, 
        loading: state.refugee.loading
      }
    },
    shallowEqual
  ); 

  const chartType = [
    {
      value: 'bar',
      label: 'Bar Graph'
    },
    {
      value: 'pie',
      label: 'Pie Chart'
    }, 
    {  
      value: 'line',
      label: 'Line Graph'
    }
  ]; 

  /**
   * TODO: Populate with whatever we get from the filter. 
   */
  const options = ({
    year: [2016, 2018],
    origin: ["SYR", "IRA"],
    resettlement: ["USA", "NOR"]
  });

  /**
    * * Fetches the available countries on page load. 
  */
  useEffect(() => {
    apiCalls.fetchValidCountries(dispatch);
  }, []);
  
  /** 
  * TODO: Add a Filter System that will gather user input and pass that on to the graphs as params. 
  * TODO: Add source for the api. 
  */
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
        <Grid container direction="row" spacing={4} justify="center">    
          <Grid item xs={10} sm={10} md={10} lg={3}> 
            <VisualizationForm 
              chartType={chartType}
              orig={origCountries}
              dest={destCountries}
            >
            </VisualizationForm>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <BarGraph color="green" data={ unhcrSubData } />
          </Grid>        
        </Grid>
      </main>
    </Container>
  </div>
  );
}

export default Visualization; 
