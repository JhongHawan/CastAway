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
      <Grid container direction="row" align="center" className={classes.missionSection}>
        {/* <Grid className={classes.missionLogo} item sm={12}>
          <img className={classes.imgStyle} src="/castawayLogo.png" alt="Logo" />
        </Grid> */}
        <Grid item sm={12} align="center" alignItems="center" justifyContent="center">
          <Typography variant="h4" color="secondary">
            Why a paper boat?
          </Typography>
        </Grid>
        <Grid className={classes.missionParagraph} item sm={12} align="center" alignItems="center" justifyContent="center" >
          <Typography variant="subtitle1" >
            A paper boat is symbolic of life and the fact that paper can not float forever in the water. A paper boat is also a common symbol of hopes and dreams of a young boy, similar to the hopes and dreams of many refugees to find a safe and welcoming home. Although it is not the only way, many refugees arrived in their host countries on a boat. The <span style={{ color: '#F14841', textWeight:'700'}}>orange</span> heart on the top of the logo symbolizes home, while the path leading to the boat symbolizes journey. Orange is a significant color for refugees because it represents the color of the life vests many of them had to wear on their journey. Similarly, <span style={{ color: '#002851', textWeight:'700' }}>blue</span> is a color of hope and resilience. Lastly, Syrian refugees were given blue passports by the United Nations adding further significance to the color.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About; 