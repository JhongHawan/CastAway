import React from 'react';
// import React from 'react';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                  <Typography component='body1' variant='body1'>
                     {props.definition}
                  </Typography>
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
                     definition="----"
                  />
                  <TerminologyCard
                     term="Migrant"
                     definition="----"
                  />
                  <TerminologyCard
                     term="Returnee"
                     definition="----"
                  />
               </Col>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Immigrant"
                     definition="----"
                  />
                  <TerminologyCard
                     term="Protected Person"
                     definition="----"
                  />
                  <TerminologyCard
                     term="Stateless Person"
                     definition="----"
                  />
               </Col>
               <Col md={6} lg={4}>
                  <TerminologyCard
                     term="Internally Displaced Person"
                     definition="----"
                  />
                  <TerminologyCard
                     term="Refugee"
                     definition="----"
                  />
                  <TerminologyCard
                     term="Temporary Resident"
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
