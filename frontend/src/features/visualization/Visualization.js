import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import BarGraph from '../../components/BarGraph'; 
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux'; 
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
  // const refugees = useSelector(state => state.refugeeSlice.refugees); 

  // const fetchAllRefugees = () => dispatch => {
  //   axios.get('api/allRefugees').then(response => {
  //     // Don't know if this will work since the mock data for the website is just 
  //     // a bunch of books not in an array. 
  //     dispatch();
  //   });
  // }

  // const [ data ] = useState(fetchAllRefugees); 
  
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
          <Grid item xs={5}>
            <BarGraph color="pink" title="Syria" />
          </Grid>
          <Grid item xs={5}>
          <Button variant="contained" color="primary" onClick={() => dispatch(getDataReducer())}>
            Get Data
          </Button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus animi quia ducimus sunt incidunt fugiat dolorum suscipit quas unde quo qui sequi tempora alias excepturi minus, nihil illum maxime?
              Deleniti adipisci, consectetur aut maxime unde doloremque blanditiis, nostrum quam eaque possimus ducimus consequuntur esse, temporibus sint natus fugiat quas? Quia quis temporibus illo tenetur nostrum suscipit in adipisci recusandae.
              Voluptatum, a. Quod recusandae, commodi quis exercitationem assumenda corrupti a inventore molestias doloribus hic blanditiis delectus molestiae, sequi id amet pariatur temporibus ex dolorum nesciunt vitae voluptas cumque maiores maxime.
            </p>
          </Grid>
        </Grid>
      </main>
     </Container>
   </div>
  );
}

export default Visualization; 
