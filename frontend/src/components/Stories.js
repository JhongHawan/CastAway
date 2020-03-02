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
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles(theme => ({
   heroContent: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3, 5, 0),
   },
   sectionBlock: {
      backgroundColor: '#002851',
      padding: theme.spacing(7, 10, 7)
   },
   sectionTitle: {
      color: '#ffffff',
      fontSize: '80px',
      fontFamily: 'zeitung, sans-serif',
      fontWeight: 800,
      fontStyle: 'normal'
   },
   sectionText: {
      color: '#ffffff',
   },
   testSection: {
      fontSize: '150px',
      color: '#ffffff',

   }

}))

function Stories() {
   const classes = useStyles();

   return (
      <div >


         <Box className={classes.sectionBlock}>
            <Box>
               <Grid container spacing={5} >
                  <Grid item>
                     <MenuBookIcon className={classes.testSection} />
                  </Grid>
                  <Grid item sm={9}>
                     <h1 className={classes.sectionTitle}>
                        THEIR STORIES.
                     </h1>
                     <h6 className={classes.sectionText}>
                        Behind the stories of empty cities, crowded camps and overflowing borders. There are homes abandoned, families separated, lives losts, and unimaginable stories to be told.
                     </h6>
                  </Grid>
               </Grid>

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
