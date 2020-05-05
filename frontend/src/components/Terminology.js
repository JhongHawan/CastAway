import React from 'react';
// import React from 'react';
// import StoryCard from './StoryCard';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Footer from './About/Footer';
import Hero from './Hero';
import { Box, Typography, Paper, Hidden, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col, Row, Container } from 'react-bootstrap';
import { useStyles } from './Styles';
import Divider from './Divider';

function Terminology() {

   function TerminologyCard(props) {

      const classes = useStyles();

      return (
         <Col style={{ padding: 10 }}>
            <ExpansionPanel style={{ background: '#F2F2F2' }}>
               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' className={classes.factTitle}>
                     {props.term}
                  </Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Container>
                     <Row>
                        <Typography>{props.pronunciation}</Typography>
                     </Row>
                     <Row>
                        <Typography>{props.partOfSpeech}</Typography>
                     </Row>
                     <Row style={{ paddingTop: '1em' }}>
                        <Typography component='body1' variant='body1'>
                           {props.definition}
                        </Typography>
                     </Row>
                  </Container>
               </ExpansionPanelDetails>
            </ExpansionPanel >
         </Col >
      )
   }

   function TerminologyGrid() {
      const classes = useStyles();
      return (
         <Container >
            <Row>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Asylum Seeker"
                     pronunciation="/əˈsīləm sēːkər/"
                     partOfSpeech="noun"
                     definition="An asylum seeker is a person who flees their home country because of war or other hards harming them or their family, enters another country and applies for asylum, i.e. the right to international protection, in this other country."
                  />
                  <TerminologyCard
                     term="Migrant"
                     pronunciation="/ˈmīɡrənt/"
                     partOfSpeech="noun"
                     definition="A person who moves from one place to another, especially in order to find work or better living conditions."
                  />
                  <TerminologyCard
                     term="Returnee"
                     pronunciation="/rəˌtərˈnē/"
                     partOfSpeech="noun"
                     definition="A person who returns to a place, especially after a prolonged absence. A refugee returning from abroad.
                     "
                  />
               </Col>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Immigrant"
                     pronunciation="/ˈiməɡrənt/"
                     partOfSpeech="noun"
                     definition="An immigrant is someone who makes a conscious decision to leave his or her home and move to a foreign country with the intention of settling there."
                  />
                  <TerminologyCard
                     term="Protected Person"
                     pronunciation="/prəˈtekted pərs(ə)n/"
                     partOfSpeech="noun"
                     definition="Protected persons is a legal term under international humanitarian law and refers to persons who are under specific protection of the 1949 Geneva Conventions, their 1977 Additional Protocols, and customary international humanitarian law during an armed conflict."
                  />
                  <TerminologyCard
                     term="Stateless Person"
                     pronunciation="/ˈstātləs pərs(ə)n/"
                     partOfSpeech="noun"
                     definition="A stateless person is someone who, under national laws, does not enjoy citizenship – the legal bond between a government and an individual – in any country."
                  />
               </Col>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Internally Displaced Person"
                     pronunciation="/inˈtərnlē disˈplāsed pərs(ə)n/"
                     partOfSpeech="noun"
                     definition="An internally displaced person is someone who is forced to flee his or her home but who remains within his or her country's borders."
                  />
                  <TerminologyCard
                     term="Refugee"
                     pronunciation="/refyo͝oˈjē/"
                     partOfSpeech="noun"
                     definition="A refugee is someone a person who has been forced to leave their country in order to  escape war, persecution, or natural disaster. Within refugees there are multiple distictions. For example political refugees tend to escape because of fear of persecution or because of their political views. Economic refugees escape due to harsh and life threatening econmic conditions. "
                  />
                  <TerminologyCard
                     term="Temporary Resident"
                     pronunciation="/ˈtempəˌrerē rez(ə)dənt/"
                     partOfSpeech="noun"
                     definition="A temporary resident is a foreign national granted the right to stay in a country for a certain length of time (e.g. with a visa or residency permit), without full citizenship. This may be for study, business, or other reasons."
                  />
               </Col>
            </Row>
         </Container >
      )
   }
   const classes = useStyles();

   return (
      <div >
         <Hero
            showCard={false}
            sectionTitle="Terminology"
         />
         {/* <span style={{ paddingTop: '10px'}}></span> */}
         <Divider title="Terminology" />
         <Container style={{ paddingBottom: '2em' }}>
            <Typography component="body1" variant="body1">
               There are so many different words used to describe the variety of individuals 
               that leave their homes and travel to different countries. The choice to leave    
               can be voluntary or against their will. Regardless, knowing the difference    
               between these terms is a very important step in providing the required aid.     
            </Typography>
         </Container>
         <TerminologyGrid />
      </div>
   );
}

export default Terminology; 
