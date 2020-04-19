import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeamSection from './TeamSection';
import Footer from './Footer';

import Hero from '../Hero';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bargraph: {
    color: '#white'
  },
  header: {
    margin: theme.spacing(6)
  },
  teamSection: {
    margin: "10%"
  },
  missionSection: {
    background: "#F0F5F9",
    paddingTop: "2.5%",
    paddingBottom: "2.5%"
  },
  missionParagraph: {
    margin: "15% auto",
    marginLeft: "15%"
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
      {/* <Typography
        component="h2"
        variant="h2"
        color="inherit"
        align="center"
        noWrap
        className={classes.header}
      >
        About Us
      </Typography> */}
      {/* Put into Mission statement component */}
      <Grid
        container
        direction="row"
        align="center"
        className={classes.missionSection}
      >
        <Grid item xs={3} sm={6}>
          <div align="left" className={classes.missionParagraph}>
            <p>
              Hello! We are the team behind CASTAWAY. This project is created for the Informatics Capstone 2020. Our mission is to create a solution to allow the American public and media to attain accurate, reliable information concerning refugees. So that the American public can make informed decisions and the media can report accurately and efficiently.
            </p>
          </div>
        </Grid>
        <Grid item xs={3} sm={6}>
          <img src="/castawayLogo.png" alt="Logo" />
        </Grid>
      </Grid>
      <div className={classes.teamSection}>
        <TeamSection>
        </TeamSection>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About; 