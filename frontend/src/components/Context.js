import React from 'react';
// import React from 'react';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Nav, ThemeProvider } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@material-ui/core';
import { Col, Row, Container } from 'react-bootstrap';
import Footer from './About/Footer';
import Hero from './Hero';
import Divider from './Divider';
import { Timeline, TimelineItem, VerticalTimeline } from 'vertical-timeline-component-for-react';
import { useStyles } from './Styles'
// import { Typography } from '@material-ui/core';


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


function Event(props) {
   return (
      <TimelineItem
         key={props.key}
         dateText={props.date}
         dateInnerStyle={{ background: '#c9d6df', color: '#002851' }}
         style={{ color: '#F16841' }}
         bodyContainerStyle={{
            background: '#F0F5F9',
            padding: '20px',
            borderRadius: '8px',
            // boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
         }}
      >
         <Typography style={{ padding: '0.5em' }} component="overline" variant="overline" color="secondary">
            {props.title}
         </Typography>
         {/* <Typography component="body1" variant="body1">
            {props.detail}
         </Typography> */}
      </TimelineItem>
   )
}

function ContextTimeline() {
   return (
      <Timeline lineColor={'#F0F5F9'}>
         <Event
            key="001"
            date="1891"
            title="Bureau of Immigration is Established"
         />
         <Event
            key="002"
            date="1917"
            title="The Immigration Act of 1917"
         />
         <Event
            key="003"
            date="1921-1924"
            title="The Quota Acts"
         />
         <Event
            key="004"
            date="1939-1945"
            title="World War II"
         />
         <Event
            key="005"
            date="1945"
            title="The United Nations is Established"
         />
      </Timeline>
   )
}

function Myths() {
   const classes = useStyles();

   function TrueFact(props) {
      return (
         <Row >
            <Col sm={3} md={4} align="center">
               <img src="green_check.png" width="50px" />
            </Col>
            <Col sm={9} md={8}>
               <Typography component="overline" variant="overline">{props.description}</Typography>
            </Col>
         </Row>
      )
   }

   function FalseFact(props) {
      return (
         <Row>
            <Col sm={3} md={4} style={{ textAlign: 'center' }}>
               <img src="red_check.png" width="50px" />
            </Col>
            <Col sm={9} md={8}>
               <Typography component="overline" variant="overline">{props.description}</Typography>
            </Col>
         </Row>
      )

   }

   return (
      <Container>
         <Box className={classes.descriptionBox}>
            <Typography component="body1" variant="body1">There are many myths and misconceptions about refugees, that continue to spread and hurt refugees. It is extremely important to understand the difference between a refugee and an immigrant, comprehend the complexity of the processes they go through to get into the US, and realize the real reasons that they leave their homes.  </Typography>
         </Box>
         <Row>
            <Col md={6}>
               <TrueFact
                  description="Refugees go through a 20 step vetting process."
               />
               <TrueFact
                  description="Refugees are forced to leave their home to escape violence."
               />
               <TrueFact
                  description="The refugee crisis is still happening."
               />
            </Col>
            <Col md={6}>
               <FalseFact
                  description="Immigrants and refugees are the same type of person."
               />
               <FalseFact
                  description="All refugees are terrorists with a violent agenda."
               />
               <FalseFact
                  description="Refugees do not pay taxes, and negatively impact the economy."
               />
            </Col>
         </Row >
      </Container >

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
         <Container>
            <Box>
               <Divider title="HISTORY" />
               <Box className={classes.descriptionBox}>
                  <Typography component="body1" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fringilla dui, quis scelerisque sem. Pellentesque vitae enim ut diam placerat ullamcorper sit amet sed quam. Pellentesque a nisi nisi. Donec elit orci, consectetur et rhoncus id, tincidunt eu neque.</Typography>
               </Box>
               <ContextTimeline />
            </Box>
            <Box>
               <Divider title="MYTHS" />
               <Myths />
            </Box>
            <Box>
               <Divider title="TERMINOLOGY" />
            </Box>
            <Box>
               <Divider title="VETTING PROCESS" />
            </Box>
         </Container>
         {/* <FontTest /> */}
         <Footer />
      </div>
   );
}

export default Context; 
