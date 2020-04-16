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

  const { refugeeData, unhcrData, loading } = useSelector(
    (state) => {
      return {
        // It has to refer to the state of the reducer which in this case has name
        // refugee. So it's not state.refugees but state.refugee.refugees
        refugeeData: state.refugee.refugees,
        unhcrData: state.unhcr.data,
        loading: state.refugee.loading
      }
    },
    shallowEqual
  ); 

  console.log(unhcrData); 

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
          Get Local Refugee Data
        </Button> 
        <Button color="secondary" variant="contained" onClick={() => {
          apiCalls.fetchUnhcr(dispatch, "submissions");
        }}>
          Get UNHCR Refugee Data
        </Button> 
        <Grid container spacing={1} justify="center">
          <Grid item xs={6}>
            <BarGraph color="pink" title="Iraq" data={ refugeeData } />
          </Grid>
          <Grid item xs={6}>
            <BarGraph color="green" title="Syria" data={ unhcrData } />
          </Grid>
        </Grid>
      </main>
     </Container>
   </div>
  );
}

export default Visualization; 
