import React from 'react';
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


/**  
 * ! Everything is contained within Stories
 */
function Stories() {
   const classes = useStyles();

   // TODO replace with real stories
   let base = "user_"
   let end = ".png"
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

   // * CAN BE USED GLOBALLY
   let [imageState, setImageState] = React.useState("user_1.png")


   /**
    * 
    * @param {String} props.img name of the image
    */
   function Story(props) {

      function handleClick() {

         console.log("-------------------------");
         console.log("Image Name   : " + imageState);
         setImageState(imageState = props.img);
         console.log("Clicked Name : " + imageState);

      }

      return (
         <Col sm={6} md={4} lg={3}>
            <Box className={classes.storyCard}>
               <Box className={classes.imageStory} data-content="HELLO" onClick={() => handleClick(imageState)}>
                  <img src={props.img} width="100%" />
               </Box>
            </Box>
         </Col>
      )
   }


   /**
    * * Highlighted Story
    */
   function Highlight() {
      return (
         <Container className={classes.storyHighlightContainer}>
            <Row>
               <Col sm={3} md={4}>
                  <img className={classes.storyHighlightImage} src={imageState} width="100%" />
               </Col>
               <Col sm={9} md={8}>
                  <Typography component="h4" variant="h4">{imageState}</Typography>
                  <Typography component="h5" variant="h5">Home</Typography>
                  <Typography component="body1" variant="body1">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Nibh sed pulvinar proin gravida.
                  </Typography>
               </Col>
            </Row>
         </Container>
      )
   }

   return (
      <div >
         <Hero
            showCard={false}
            sectionTitle="Stories"
         />

         <Container className={classes.storyIntro}>
            <Typography variant="h3" color="secondary">In A Sea of Faces...</Typography>
            <Highlight />
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

         <Footer />
      </div>
   );
}

export default Stories; 
