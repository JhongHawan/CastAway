import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from './Divider'; 
import Hero from './Hero';
import CallToAction from './CallToAction';
import { useStyles } from './Styles';

function YourRole() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
         showCard={true}
         sectionTitle="No one puts their children in a boat unless the water is safer than the land"
         cardTitle="WHY DOES IT MATTER?"
         cardSubtitle="Subtitle Examples"
         cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
      />
      <Grid
        container
        align="center"
      >
         <Box className={classes.homeTopSpace}>
            <Divider title="HOW CAN YOU HELP" />
            <Box className={classes.callToAction}>
               <CallToAction />
            </Box>
         </Box>
      </Grid>
    </div>
  );
}

export default YourRole; 