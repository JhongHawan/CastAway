import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from '../../components/BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import Filter from '../../components/Filter'; 
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

  const { refugeeData, unhcrSubData, unhcrDemoData, loading } = useSelector(
    (state) => {
      return {
        // It has to refer to the state of the reducer which in this case has name
        // refugee. So it's not state.refugees but state.refugee.refugees
        refugeeData: state.refugee.refugees,
        unhcrSubData: state.unhcrSub.data,
        unhcrDemoData: state.unhcrDemo.data,
        loading: state.refugee.loading
      }
    },
    shallowEqual
  ); 

  /**
   * TODO: Populate with whatever we get from the filter. 
   */
  const options = ({
    year: [2016, 2018],
    origin: ["SYR", "IRA"],
    resettlement: ["USA", "NOR"]
  });

  /** 
    * * Function to write to json file for user to download if data has been retrieved from API.
    * * Otherwise alerts user to fetch data first. 
    * ! Currently only downloading data from UNHCR API.
  */
  const downloadFile = async () => {
    if (unhcrSubData.length == 0) {
      alert("No data has been fetched yet, you'd be downloading an empty file! HINT: Try getting the data first!");
    } else {
      const fileName = "data";
      const json = JSON.stringify(unhcrSubData);
      const blob = new Blob([json],{type:'application/json'});
      const href = await URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  console.log(unhcrSubData); 
  console.log(unhcrDemoData); 

  /**
    * fetchAllRefugees API Call
    * * Can use this in the History and Myths page to load data automatically. 
    * ! Remove the useEffect unless you're going to update the data when the page loads. 
  */
  useEffect(() => {
    // fetchAllRefugees(); 
    // Need to edit the state here and 
    // reset loading = false; 
  }, []);
  
  /** 
  * TODO: Add a Filter System that will gather user input and pass that on to the graphs as params. 
  * TODO: Add source for the api. 
  * TODO: The BarGraph receiving the data needs to know if it's the local data or unhcr data. 
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
        <Grid container spacing={1} justify="center">
          <Grid item xs={12}>
            <Button color="secondary" variant="contained" onClick={() => {
              apiCalls.fetchUnhcrSub(dispatch, options);
            }}>
              Get UNHCR Sub Data
            </Button>
            <Button color="primary" variant="contained" onClick={downloadFile}>
              Download Data 
            </Button>
          </Grid>
          <Grid item xs={12}> 
            <Filter></Filter>
          </Grid>
          <Grid item xs={10}>
            <BarGraph color="green" title="Syria" data={ unhcrSubData } />
          </Grid>
        </Grid>
      </main>
     </Container>
   </div>
  );
}

export default Visualization; 
