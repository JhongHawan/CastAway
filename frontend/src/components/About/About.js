import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeamSection from './TeamSection'; 
import Footer from './Footer'; 

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

  return(
   <div className={classes.root}>
    <Typography
        component="h2"
        variant="h2"
        color="inherit"
        align="center"
        noWrap
        className={classes.header}
      >
        About Us
      </Typography>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus molestiae officia illum? Eveniet labore officia blanditiis aspernatur ad tempora nihil placeat! Labore consectetur explicabo hic dolore accusamus a commodi?Molestiae vero eveniet eligendi cupiditate voluptatem ratione sed deserunt voluptas reiciendis recusandae tempore vel ipsum, nostrum mollitia incidunt consequatur sequi dicta aliquid officiis repellendus quis odio! Beatae nulla repellendus iste.
            </p>
          </div>
        </Grid>
        <Grid item xs={3} sm={6}>
          <img src="/castawayLogo.png" alt="Logo"/>
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