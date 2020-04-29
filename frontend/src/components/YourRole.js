import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from './Divider'; 
import Hero from './Hero';
import CallToAction from './CallToAction';
import {useStyles} from './Styles'; 

const customStyles = makeStyles(theme => ({
  
})); 

function YourRole() {
  const customClasses = customStyles();
  const classes = useStyles(); 

  return (
    <div>
      <Hero
        showCard={true}
        sectionTitle={"\"No one puts their children in a boat unless the water is safer than the land\""}
        cardTitle="WHY DOES IT MATTER?"
        cardSubtitle="Subtitle Examples"
        cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
      />
      <Grid
        container
        align="center"
        justify="center"
        spacing={2}
        className={classes.homeTopSpace}
      >
        <Grid item xs={12}>
          <Divider title="HOW CAN YOU HELP" />
          <CallToAction />
        </Grid>
      </Grid>
    </div>
  );
}

export default YourRole; 