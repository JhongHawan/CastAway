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

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useStyles } from './Styles'


function Stories() {
   const classes = useStyles();

   return (
      <div >
         <Box className={classes.sectionBlock}>
            <Box>
               <Grid container spacing={5} >
                  <Grid item>
                     <MenuBookIcon className={classes.storyIcon} />
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
      </div>
   );
}

export default Stories; 
