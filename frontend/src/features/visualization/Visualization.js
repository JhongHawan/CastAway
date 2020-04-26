import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from '../../components/Charts/BarGraph'; 
import PieChart from '../../components/Charts/PieChart';
import Hero from '../../components/Hero';  
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import VisualizationForm from '../../components/Filter/VisualizationForm'; 
import Divider from '../../components/Divider'; 
import apiCalls from './apiCalls'; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    margin: theme.spacing(6)
  }, 
  cardStyle: {
    display: 'flex',
    flexDirection: "column",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  dividerMargin: {
    margin: theme.spacing(4)
  },
  chartContainer: {
    maxWidth: '99%'
  }
}));

function Visualization() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { 
    unhcrSubData, 
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
    * * Fetches the available countries on page load. 
  */
  useEffect(() => {
    apiCalls.fetchValidCountries(dispatch);
  }, []);

  return (
    <div className="Visualization">
      <Hero
        showCard={false}
        sectionTitle="Visualization"
      />
      <main>
        <Container> 
          <Grid container direction="row" spacing={4} justify="center">    
            <Grid className={classes.dividerMargin} item xs={12} sm={12} md={12} lg={12}>
              <Divider title="Options" />
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={12}> 
              <VisualizationForm 
                chartType={chartType}
                orig={origCountries}
                dest={destCountries}
              >
              </VisualizationForm>
            </Grid>       
          </Grid>
        </Container>
        <Container className={classes.chartContainer}> 
          <Grid container direction="row" spacing={4} justify="center">
            <Grid className={classes.dividerMargin} item xs={12} sm={12} md={12} lg={12}>
              <Divider title="Charts" />
            </Grid>    
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <Box boxShadow={3} className={classes.cardStyle}>
                <Typography
                  color="primary"
                  variant="h5"
                >
                  Bar Graph
                </Typography>
                <BarGraph color="purple" data={ unhcrSubData } />
              </Box> 
            </Grid>    
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <Box boxShadow={3} className={classes.cardStyle}>
                <Typography
                  color="primary"
                  variant="h5"
                >
                  Pie Chart
                </Typography>
                <PieChart data={ unhcrSubData } />
              </Box>
            </Grid>   
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <Box boxShadow={3} className={classes.cardStyle}>
                <Typography
                  color="primary"
                  variant="h5"
                >
                  Line Chart
                </Typography>
                <BarGraph color="pink" data={ unhcrSubData } />
              </Box> 
            </Grid>         
          </Grid>
        </Container>
      </main>
  </div>
  );
}

export default Visualization; 
