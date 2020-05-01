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
                     partOfSpeech=""
                     definition="----"
                  />
                  <TerminologyCard
                     term="Returnee"
                     pronunciation="/rəˌtərˈnē/"
                     partOfSpeech=""
                     definition="----"
                  />
               </Col>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Immigrant"
                     pronunciation="/ˈiməɡrənt/"
                     partOfSpeech=""
                     definition="----"
                  />
                  <TerminologyCard
                     term="Protected Person"
                     pronunciation="/prəˈtekted pərs(ə)n/"
                     partOfSpeech=""
                     definition="----"
                  />
                  <TerminologyCard
                     term="Stateless Person"
                     pronunciation="/ˈstātləs pərs(ə)n/"
                     partOfSpeech=""
                     definition="----"
                  />
               </Col>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Internally Displaced Person"
                     pronunciation="/inˈtərnlē disˈplāsed pərs(ə)n/"
                     partOfSpeech=""
                     definition="----"
                  />
                  <TerminologyCard
                     term="Refugee"
                     pronunciation="/ˌrefyo͝oˈjē/"
                     partOfSpeech=""
                     definition="----"
                  />
                  <TerminologyCard
                     term="Temporary Resident"
                     pronunciation="/ˈtempəˌrerē rez(ə)dənt/"
                     partOfSpeech=""
                     definition="----"
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
         <TerminologyGrid />
      </div>
   );
}

export default Terminology; 
