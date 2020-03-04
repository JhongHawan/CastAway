import React from 'react';
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeamCard from './TeamCard'; 

const useStyles = makeStyles(theme => ({
  bargraph: {
    color: '#white'
  },
  header: {
    margin: theme.spacing(6)
  }
}));

function TeamSection() {
  const classes = useStyles(); 

  return(
   <div>
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
            imgPath="/brian.jpg"
            imgTitle="brian"
            teamName="Brian Jhong"
            description="Full-Stack Developer"
            contact="jhongb@uw.edu"
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
   </div>
  );
}

export default TeamSection; 