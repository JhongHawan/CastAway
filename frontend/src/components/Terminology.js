import React from 'react';
import { Grid, Card, CardActions, Box, Typography, Paper, Hidden, CardContent } from '@material-ui/core';
import { Col, Row, Container } from 'react-bootstrap';
import { useStyles } from './Styles';
import Hero from './Hero';
import Divider from './Divider';

function Terminology() {
   const classes = useStyles();

   function TerminologyCard(props) {
      return (
         <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.termCard} variant="elevation" elevation={5}>
               <CardContent>
                  <Typography variant="h5" component="h5" color="secondary" style={{ marginBottom: 5 }}>
                     {props.term}
                  </Typography>
                  <Typography style={{ marginBottom: 12 }} color="textSecondary">
                     {props.pronunciation}
                  </Typography>
                  <Typography style={{ marginBottom: 12 }} color="textSecondary">
                     {props.partOfSpeech}
                  </Typography>
                  <Typography variant="body2" component="p">
                     {props.definition}
                  </Typography>
               </CardContent>
            </Card>
         </Grid>
      )
   }


   return (
      <React.Fragment>
         <Hero
            showCard={false}
            sectionTitle="Terminology"
         />
         <Divider title="THE IMPORTANCE OF USING THE RIGHT WORDS" />
         <Container>
            <Row>
               <Col xs={12} sm={5} md={5} style={{ textAlign: 'center', marginTop: "auto", marginBottom: "auto" }}>
                  <img src="halfHijabi.png" width="75%" />
               </Col>
               <Col xs={12} sm={7} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <Container style={{ paddingBottom: '2em', }}>
                     <Typography component="body1" variant="body1">
                        There are so many different words used to describe the variety of individuals
                        that leave their homes and travel to different countries. The choice to leave
                        can be voluntary or against their will. Regardless, knowing the difference
                        between these terms is a very important step in providing the required aid.
                     </Typography>
                  </Container>
               </Col>
            </Row>
         </Container>
         <Divider title="DEFINITIONS" />
         <Container maxWidth={false} style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
            <Row>
               <Col sm={{ span: 5 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <Typography variant="h4" color="primary" style={{ paddingBottom: 15 }}>
                     Forced to Leave
                  </Typography>
                  <Typography component="body1" variant="body1">
                     When your home country becomes too threatening to continue to live in, individuals are forced
                     to flee. Being forced out means leaving home without certainty of a safe arrival and usually entails
                     a dangerous journey to find a new home.
                  </Typography>
               </Col>
               <Col sm={{ span: 6, offset: 1 }}>
                  <img src="refugees_explaination.png" width="100%" />
               </Col>
            </Row>
         </Container>
         <Container>

            <Grid container spacing={2}>

               <TerminologyCard
                  term="Temporary Resident"
                  pronunciation="/ˈtempəˌrerē rez(ə)dənt/"
                  partOfSpeech="noun"
                  definition="A temporary resident is a foreign national granted the right to stay in a country for a certain length of time (e.g. with a visa or residency permit), without full citizenship. This may be for study, business, or other reasons."
               />

               <TerminologyCard
                  term="Asylum Seeker"
                  pronunciation="/əˈsīləm sēːkər/"
                  partOfSpeech="noun"
                  definition="An asylum seeker is a person who flees their home country because of war or other hards harming them or their family, enters another country and applies for asylum, i.e. the right to international protection, in this other country."
               />

               <TerminologyCard
                  term="Returnee"
                  pronunciation="/rəˌtərˈnē/"
                  partOfSpeech="noun"
                  definition="A person who returns to a place, especially after a prolonged absence. A refugee returning from abroad.
                     "
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
                  definition="A refugee is someone a person who has been forced to leave their country in order to  escape war, persecution, or natural disaster. Within refugees there are multiple distinctions. For example, there are political refugees that escape for political reasons, and economic refugees that leave for economic reasons."
               />
               <TerminologyCard
                  term="Temporary Resident"
                  pronunciation="/ˈtempəˌrerē rez(ə)dənt/"
                  partOfSpeech="noun"
                  definition="A temporary resident is a foreign national granted the right to stay in a country for a certain length of time (e.g. with a visa or residency permit), without full citizenship. This may be for study, business, or other reasons."
               />
            </Grid>
         </Container>


         <Container maxWidth={false} >
            <Row style={{ paddingBottom: '2.5em', paddingTop: '3em' }}>
               <Col sm={6}>
                  <img src="immigrant_explaination.png" width="100%" />
               </Col>
               <Col sm={{ span: 5, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <Typography variant="h4" color="primary" style={{ paddingBottom: 15 }}>
                     Leaving Willingly
                  </Typography>
                  <Typography component="body1" variant="body1">
                     On the contrary to individuals forced to flee, those who leave willingly have their destination country
                     guaranteed. While their intentions may overlap with those forced to leave home, their journeys may look completely different.
                  </Typography>
               </Col>
            </Row>

            <Container>
               <Grid container spacing={2}>
                  <TerminologyCard
                     term="Immigrant"
                     pronunciation="/ˈiməɡrənt/"
                     partOfSpeech="noun"
                     definition="An immigrant is someone who makes a conscious decision to leave his or her home and move to a foreign country with the intention of settling there."
                  />
                  <TerminologyCard
                     term="Migrant"
                     pronunciation="/ˈmīɡrənt/"
                     partOfSpeech="noun"
                     definition="A person who moves from one place to another, especially in order to find work or better living conditions."
                  />
               </Grid>
            </Container>
         </Container>
      </React.Fragment>
   );
}

export default Terminology; 
