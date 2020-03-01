import React from 'react';
// import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Box } from '@material-ui/core';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
   heroContent: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3, 5, 0),
   },
}))

function Stories() {
   const classes = useStyles();

   return (
      <div >
         {/* NEW HEADING TEST */}
         {/* <Box className={classes.heroContent}>
            <Grid container spacing={4}>
               <Grid item sm={6}>
                  <h1 className="storiesTitle">STORIES</h1>
               </Grid>
               <Grid item>
                  <p>Amidst the politics of the crisis, we forget that there are lives behind the articles. Behind the stories of empty cities, crowded camps and overflowing borders. There are homes abandoned, families separated, lives losts, and whole stories revolutionized. </p>
               </Grid>
            </Grid>
         </Box> */}
         <Box className="sectionGradient">
            <Box className="heading1">
               <h1 className="bigTitle titleCenter">STORIES</h1>
               <h6 className="titleCenter">Putting a face to the crisis.</h6>
            </Box>
         </Box>
         {/* NEW STORIES LIST GRID LSIT */}
         <StoriesList />


         {/* OLD STORIES - GRID OF IMAGES */}
         {/* <Grid container className="heading1" spacing={2}>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_2.svg" details="A, 29"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_1.svg"details="J, 49"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_3.svg" details="X, 19"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_1.svg" details="B, 20"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_2.svg" details="C, 35"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_3.svg" details="H, 55"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_3.svg" details="D, 34"/>
        </Grid>
        <Grid item lg={3}>
           <StoryCard imgTitle="prof_1.svg" details="G, 23"/>
        </Grid>

      </Grid> */}

      </div>
   );
}

export default Stories; 
