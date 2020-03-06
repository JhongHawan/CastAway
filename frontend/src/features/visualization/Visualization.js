import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from '../../components/BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import { getDataReducer } from './refugeeSlice';
const axios = require('axios').default;

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

  const fetchAllRefugees = () => {
    axios
      .get('/api/refugees/refugee/origin', {
        params: {
          origin: "Iraq"
        }
      })
      .then(response => {
        console.log(response.status);
        // Here we get the response and dispatch with the action and the response.data is our payload. 
        // This then executes all the functionality of our action that we declared in our slice.  
        dispatch(getDataReducer(response.data))   
      });
  }

  const { refugees, loading } = useSelector(
    (state) => {
      return {
        // It has to refer to the state of the reducer which in this case has name
        // refugee. So it's not state.refugees but state.refugee.refugees
        refugees: state.refugee.refugees,
        loading: state.refugee.loading
      }
    },
    shallowEqual
  ); 

  // May want to put an if case here so that you only fetch data 
  // if it's not in the store already. 
  useEffect(() => {
    fetchAllRefugees(); 
    // Need to edit the state here and 
    // reset loading = false; 
  }, []);

  console.log(refugees)
  
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
          <Grid item xs={10}>
            <BarGraph color="pink" title="Iraq" data={ refugees } />
          </Grid>
        </Grid>
      </main>
     </Container>
   </div>
  );
}

export default Visualization; 
