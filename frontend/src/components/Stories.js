import React from 'react';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';


import { Container, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';


import Footer from './About/Footer';

import Hero from './Hero';
import { useStyles } from './Styles'



/**  
 * ! Everything is contained within Stories
 */

var data = require('../refugee_stories.json');





function Stories() {
   const classes = useStyles();

   // ! Parse NEW
   // console.log(data)
   // let test = data[0].name
   // console.log(test)


   // TODO replace with real stories
   // let base = "user_"
   // let end = ".png"
   // let imagesArr = [
   //    {
   //       name: base.concat(1, end),
   //    }
   // ]
   // for (let i = 2; i < 13; i++) {
   //    imagesArr.push({
   //       name: base.concat(i, end)
   //    })
   // }





   // * CAN BE USED GLOBALLY
   let [imageState, setImageState] = React.useState(data[0].img);
   let [highlightName, setHighlightName] = React.useState(data[0].name);
   let [highlightHome, setHighlightHome] = React.useState(data[0].home);
   let [highlightDesc, setHighlightDesc] = React.useState(data[0].bio)
   let [highlightLink, setHighlightLink] = React.useState(data[0].source)

   /**
    * 
    * @param {String} props.img name of the image
    * @param {String} props.name refugee name
    * @param {String} props.home place of origin
    * @param {String} props.desc bio of refugee
    */
   function Story(props) {

      function handleClick() {

         console.log("-------------------------");
         setImageState(imageState = props.img);
         console.log("Clicked Name : " + imageState);


         setHighlightName(highlightName = props.name);
         console.log("Refugee Name : " + highlightName);

         setHighlightHome(highlightHome = props.home);
         console.log("Home         : " + highlightHome);

         setHighlightDesc(highlightDesc = props.desc);
         console.log("Bio          : " + highlightDesc);
         
         setHighlightLink(highlightLink = props.link);
         console.log("Link          : " + highlightLink);

      }

      return (
         <Col sm={6} md={4} lg={3}>
            <Box className={classes.storyCard}>
               <Box className={classes.imageStory} data-content={props.name} onClick={() => handleClick(imageState)}>
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
                  <Typography component="h4" variant="h4" color="primary">{highlightName}</Typography>
                  <Typography component="h5" variant="h5" color="secondary">{highlightHome}</Typography>
                  <Typography component="body1" variant="body1">
                     {highlightDesc}
                  </Typography>
                  <br />
                  <Typography component="overline" variant="overline" color="secondary">
                     <a href={highlightLink} target="_blank">READ MORE</a>
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
                  data.map(tile => (
                     <Story img={tile.img} name={tile.name} home={tile.home} desc={tile.bio} link={tile.source} />
                  ))
               }
            </Row>
         </Container>

         {/* <Footer /> */}
      </div>
   );
}

export default Stories; 
