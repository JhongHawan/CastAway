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
// function Story(props) {
//    // const classes = useStyles();

//    // const [includeCard] = React.useState(props.showCard);


//    function handleClick() {
//       console.log("Click")
//    }


//    return (

//       // story card
//       <Col sm={6} md={4} lg={3}>
//          <Box className={classes.storyCard}>

//             <Box className={classes.imageStory} data-content="HELLO" onClick={handleClick}>
//                <img src={props.img} width="200px" />
//             </Box>
//          </Box>
//       </Col>
//    )

// }




function Stories() {
   const classes = useStyles();

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

   let [highlight, setHighlight] = React.useState(false);
   let [imageState, setImageState] = React.useState("")


   

   function Story(props) {

      function handleClick(props) {

         // TODO oddly not setting it at the end until the next?
         let before = imageState;
         if(highlight) {
            setHighlight(highlight = false);
         } else {
            setHighlight(highlight = true);
         }
         setImageState(props.img)
         console.log('Before : ' + before);
         console.log('After  : ' + imageState);

   
      }

      return (
         <Col sm={6} md={4} lg={3}>
            <Box className={classes.storyCard}>
               <Box className={classes.imageStory} data-content="HELLO" onClick={() => handleClick(props)}>
                  <img src={props.img} width="200px" />
               </Box>
            </Box>
         </Col>
      )
   }

   function Highlight(props) {
      

      return (
         <Container>
            <Row>
               <Col md={4}>
                  <img src="user_1.png" width="300px" />
               </Col>
               <Col md={8}>
                  <Typography component="h4" variant="h4">Name</Typography>
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

         {/* WORKING SECTION */}
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
