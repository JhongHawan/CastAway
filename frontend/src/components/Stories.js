import React from 'react';
// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { Grid, Box } from '@material-ui/core';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';

import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardMedia, Box, Typography } from '@material-ui/core';


import Footer from './About/Footer';

import Hero from './Hero';
import { useStyles } from './Styles'


// TODO find way to show small div cover at the bottom of the img
function Story(props) {
   const classes = useStyles();

   return (

      // story card
      <Col sm={6} md={4} lg={3}>
         <Box className={classes.storyCard}>
            <img src={props.img} width="200px" className={classes.storyImg} />
            <Box>
               <Typography variant="h6" className={classes.storyInfo}>J Doe</Typography>
               <Typography variant="body1" className={classes.storyInfo}>There are details</Typography>
            </Box>
         </Box>
      </Col>
   )

}


function Stories() {
   const classes = useStyles();

   let base = "user_"
   // the suffix of image names
   let end = ".png"

   // an array of objects to map
   let imagesArr = [
      {
         name: base.concat(1, end),
      }
   ]

   for (let i = 2; i < 13; i++) {
      imagesArr.push({
         name: base.concat(i, end)
      })
   }

   return (
      <div >
         <Hero
            showCard={false}
            sectionTitle="Stories"
         />
         <Container className={classes.storyIntro}>
            <Typography variant="h3" color="secondary">In A Sea of Faces...</Typography>
         </Container>

         <Container className={classes.storyWrapper}>
            <Row>
               {
                  imagesArr.map(tile => (
                     <Story img={tile.name} />
                  ))
               }
            </Row>
            <Row>
               {
                  imagesArr.map(tile => (
                     <Story img={tile.name} />
                  ))
               }
            </Row>
         </Container>
         {/* <Story /> */}

         {/* <StoriesList /> */}

         <Footer />
      </div>
   );
}

export default Stories; 
