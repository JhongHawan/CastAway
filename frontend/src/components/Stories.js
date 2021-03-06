import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Box, Typography } from '@material-ui/core';
import Hero from './Hero';
import Divider from './Divider';
import { useStyles } from './Styles'



/**  
 * ! Everything is contained within Stories
 */

var data = require('../refugee_stories.json');





function Stories() {
   const classes = useStyles();

   // * CAN BE USED GLOBALLY
   let [imageState, setImageState] = React.useState(data[0].img);
   let [highlightName, setHighlightName] = React.useState(data[0].name);
   let [highlightHome, setHighlightHome] = React.useState(data[0].home);
   let [highlightDesc, setHighlightDesc] = React.useState(data[0].bio);
   let [highlightLink, setHighlightLink] = React.useState(data[0].source);


   let scrollHere = React.createRef();

   let scrollSmoothHandler = () => {
      scrollHere.current.scrollIntoView({ behavior: "smooth" })
   }

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


         scrollSmoothHandler();

      }

      return (
         <Col sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
            <Box className={classes.storyCard} style={{ display: 'inline-block' }}>
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
         <Container className={classes.storyHighlightContainer} ref={scrollHere} maxWidth={false}>
            <Row>
               <Col sm={3} md={4}>
                  <img className={classes.storyHighlightImage} src={imageState} width="100%" />
               </Col>
               <Col sm={9} md={8} className={classes.storyHighlight}>
                  <Typography component="h4" variant="h4" color="primary">{highlightName}</Typography>
                  <Typography component="h5" variant="h5" color="secondary">My home is {highlightHome}</Typography>
                  <Typography component="body1" variant="body1">
                     {highlightDesc}
                  </Typography>
                  <br />
                  <Typography component="overline" variant="overline" color="secondary">
                     <a href={highlightLink} target="_blank" rel="noopener noreferrer">READ MORE</a>
                  </Typography>
               </Col>
            </Row>
         </Container>
      )
   }

   return (
      <React.Fragment>
         <Hero
            showCard={false}
            sectionTitle="Stories"
         />
         <Divider title="IN A SEA OF FACES..." />
         <div style={{ backgroundColor: '#F0F5F9' }}>
            <Highlight />
         </div>

         <Container className={classes.storyWrapper}>

            <Row>
               {
                  data.map(tile => (
                     <Story img={tile.img} name={tile.name} home={tile.home} desc={tile.bio} link={tile.source} />
                  ))
               }
            </Row>
         </Container>

      </React.Fragment>
   );
}

export default Stories; 
