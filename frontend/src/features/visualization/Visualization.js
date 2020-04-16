import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from '../../components/BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
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
    * * Function to write to json file for user to download.
    * ! Currently only downloading data from our local database. 
    * TODO: Based on whichever api is called, download the appropriate data. 
  */
  const downloadFile = async () => {
    const fileName = "data";
    const json = JSON.stringify(refugeeData);
    const blob = new Blob([json],{type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <Button color="primary" variant="contained" onClick={() => {
          /**
          * TODO: Add a check whether the store is empty for refugees. If it is then fetch else don't.
          */
          apiCalls.fetchAllRefugees(dispatch); 
        }}>
          Get MongoDB Data
        </Button> 
        <Button color="secondary" variant="contained" onClick={() => {
          apiCalls.fetchUnhcrSub(dispatch, options);
        }}>
          Get UNHCR Sub Data
        </Button> 
        <Button color="secondary" variant="outlined" onClick={() => {
          apiCalls.fetchUnhcrDemo(dispatch, options);
        }}>
          Get UNHCR Demo Data
        </Button> 
        <Button color="primary" variant="outlined" onClick={downloadFile}>
          Download Data 
        </Button>
        <Grid container spacing={1} justify="center">
          <Grid item xs={6}>
            <BarGraph color="pink" title="Iraq" data={ refugeeData } />
          </Grid>
          <Grid item xs={6}>
            <BarGraph color="green" title="Syria" data={ unhcrSubData } />
          </Grid>
          <Grid item xs={6}>
            <BarGraph color="green" title="Syria" data={ unhcrDemoData } />
          </Grid>
        </Grid>
      </main>
     </Container>
   </div>
  );
}

export default Visualization; 
