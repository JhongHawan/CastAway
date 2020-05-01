import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeamSection from './TeamSection';
import Divider from '../Divider'; 

import Hero from '../Hero';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    margin: theme.spacing(6)
  },
  teamSection: {
    margin: '5%'
  },
  missionSection: {
    background: "#F0F5F9",
    paddingTop: "2.5%",
    paddingBottom: "2.5%"
  },
  missionParagraph: {
    padding: "2.5% 20%"
  }, 
  dividerMargin: {
    margin: '5% auto'
  },
  missionLogo: {
    padding: "2%"
  },
  imgStyle: {
    maxWidth: "95%"
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
        showCard={false}
        sectionTitle="About Us"
      />
      <Grid
        container
        direction="row"
        align="center"
        className={classes.missionSection}
      >
        <Grid className={classes.missionLogo} item sm={12}>
          <img className={classes.imgStyle} src="/castawayLogo.png" alt="Logo" />
        </Grid>
        <Grid item sm={12} align="center" alignItems="center" justifyContent="center">
            <Typography
              variant="h4"
              color="secondary"
            >
              Hello! We are the team behind CASTAWAY 
            </Typography>
          </Grid>
          <Grid className={classes.missionParagraph} item sm={12} align="center" alignItems="center" justifyContent="center" >
            <Typography
              variant="subtitle1"
            >
              This project is created for the Informatic Capstone 2020. Our mission is to create a solution to allow the general public and academics to obtain accurate information concerning refugees in one location. We want the general public to use the information to make informed decisions and academics to benefit their own work.
            </Typography>
        </Grid>
      </Grid>
      <div className={classes.dividerMargin} >
        <Divider title="MEET THE TEAM" />
      </div> 
      <div className={classes.teamSection}>
        <TeamSection>
        </TeamSection>
      </div>
    </div>
  );
}

export default About; 