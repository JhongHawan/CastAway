import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/GridList';
import TeamCard from './TeamCard'; 
import Card from '@material-ui/core/Card';
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
  }
}));

function About() {
  const classes = useStyles(); 

  return(
   <div className={classes.root}>
    <Container>
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
      <main>

        {/* Put into Mission statement component */}
        <Grid
          container
          direction="row"
          spacing={2}
          align="center"
        >
          <Grid item xs={12} sm={6}>
            <div align="left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus molestiae officia illum? Eveniet labore officia blanditiis aspernatur ad tempora nihil placeat! Labore consectetur explicabo hic dolore accusamus a commodi?Molestiae vero eveniet eligendi cupiditate voluptatem ratione sed deserunt voluptas reiciendis recusandae tempore vel ipsum, nostrum mollitia incidunt consequatur sequi dicta aliquid officiis repellendus quis odio! Beatae nulla repellendus iste.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="/castawayLogo.png" alt="Logo"/>
          </Grid>
        </Grid>
        {/* Put into Team component  */}
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          className={classes.header}
        >
          Meet the Team
        </Typography>
        <Grid
          container
          direction="row"
          spacing={3}
          align="center"
        >
          <Grid item xs={12} sm={3}>
            <TeamCard 
              className={classes.TeamCard}
              imgPath="/brian2.jpg"
              imgTitle="brian"
              teamName="Brian Jhong"
              description="Full-Stack Developer"
              contact="jhongb@uw.edu"
              />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TeamCard 
              className={classes.TeamCard}
              imgPath="/angela.png"
              imgTitle="angela"
              teamName="Angela Shen"
              description="UX Designer"
              contact="angelashen0607@gmail.com"
              />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TeamCard 
              className={classes.TeamCard}
              imgPath="/rahma.jpg"
              imgTitle="rahma"
              teamName="Rahma Kamel"
              description="Data Scientist/UX Designer"
              contact="kamelr@uw.edu"
              />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TeamCard 
              className={classes.TeamCard}
              imgPath="/tracy.jpg"
              imgTitle="tracy"
              teamName="Tracy Huynh"
              description="Project Manager"
              contact="thuynh12@uw.edu"
              />
          </Grid>
        </Grid>
        
        {/* Footer */}
      </main>
    </Container>
    <Footer></Footer>
   </div>
  );
}

export default About; 