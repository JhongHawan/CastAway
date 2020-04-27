import React from 'react';
// import React from 'react';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Nav, ThemeProvider } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@material-ui/core';
import Footer from './About/Footer';
import Hero from './Hero';
import { useStyles } from './Styles'

/**
 *  ! Not a real component just to see the font types
 */
function FontTest() {
   const classes = useStyles();

   return (
      <Container>
         <Box>
            This is a list of typography
            </Box>
         <Typography component="h1" variant="h1">Typography h1</Typography>
         <Typography component="h2" variant="h2">Typography h2</Typography>
         <Typography component="h3" variant="h3">Typography h3</Typography>
         <Typography component="h4" variant="h4">Typography h4</Typography>
         <Typography component="h5" variant="h5">Typography h5</Typography>
         <Typography component="h6" variant="h6">Typography h6</Typography>
         <Box>
            <Typography component="subtitle1" variant="subtitle1">Typography subtitle1</Typography>
         </Box>
         <Box>
            <Typography component="subtitle2" variant="subtitle2">Typography subtitle2</Typography>
         </Box>
         <Box>
            <Typography component="body1" variant="body1">Typography body1</Typography>
         </Box>
         <Box>
            <Typography component="body2" variant="body2">Typography body2</Typography>
         </Box>
         <Box>
            <Typography component="button" variant="button">Typography button</Typography>
         </Box>
         <Box>
            <Typography component="caption" variant="caption">Typography caption</Typography>
         </Box>
         <Box>
            <Typography component="overline" variant="overline">Typography overline</Typography>
         </Box>

         <Typography component="h1" variant="h1" color="primary">PRIMARY</Typography>
         <Typography component="h1" variant="h1" color="secondary">SECONDARY</Typography>
         <Typography component="h1" variant="h1" color="error">ERROR</Typography>
         <Typography component="h1" variant="h1" className={classes.testingWarningTheme}>WARNING</Typography>
         <Typography component="h1" variant="h1" className={classes.testingSuccessTheme}>SUCCESS</Typography>
         <Typography component="h1" variant="h1" className={classes.testingInfoTheme}>INFO</Typography>
      </Container>
   )
}

function Context() {
   const classes = useStyles();

   return (
      <div >
         <Hero
            showCard={false}
            sectionTitle="Context"
         />
         
         {/* <FontTest /> */}


      </div>
   );
}

export default Context; 
