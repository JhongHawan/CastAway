import React from 'react';
// import React from 'react';
// import StoryCard from './StoryCard';
import StoryCard from './StoryCard';
import StoriesList from './StoriesList';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Nav, ThemeProvider } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Button, Typography, Paper, Step, Stepper, StepButton, Hidden, StepLabel, StepContent, MobileStepper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
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

function VettingProcess() {
   const classes = useStyles();

   // ! calls for vetting function
   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   function getSteps() {
      return ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'];
   }

   function getStepContent(step) {
      switch (step) {
         case 0:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">United Nations Interview</Typography>
                        <ol style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Registration with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Interview with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Refugee status granted by the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Referral for resettlement in the United States.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Less than 1% of refugees globally are referred for third country resettlement. Before being considered for resettlement, most refugees must first register with the UN High Commissioner for Refugees (UNHCR). In making a referral, UNHCR conducts an in-depth assessment and background check. Only those who pass the screenings and have been determined to be among the most vulnerable and not a security risk are referred to the United States.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 1:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">State Department Interview</Typography>
                        <ol start="5" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Interview with State Department Contractors</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Resettlement Support Centers, funded by the U.S. government, conduct pre screening of all refugees applying for resettlement. During this phase, case files are created for those being considered.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 2:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">First Round of Background Checks</Typography>
                        <ol start="6" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">First background check.</Typography></li>
                           <li><Typography component="body1" variant="body1">Higher-level background check for some.</Typography></li>
                           <li><Typography component="body1" variant="body1">Another background check.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">U.S. security agencies screen candidates and conduct biographic security checks, starting with enhanced interagency checks. </Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 3:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Fingerprint screenings</Typography>
                        <ol start="9" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">First fingerprint screening; photo taken.</Typography></li>
                           <li><Typography component="body1" variant="body1">Second fingerprint screening.</Typography></li>
                           <li><Typography component="body1" variant="body1">Third fingerprint screening.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">The U.S conducts meticulous security screenings, which include: biographic and identity investigations, FBI biometric checks of fingerprints and photographs, medical screenings, other checks by U.S. domestic and international intelligence agencies including the National Counterterrorism Center/Intelligence Community and the FBI, refugees from some countries, such as Iraq and Syria, undergo an additional review through the Security Advisory Opinion process.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 4:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Homeland Security</Typography>
                        <ol start="12" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Extensive In-person interview with Homeland Security.</Typography></li>
                           <li><Typography component="body1" variant="body1">Homeland Security approval is required.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Specially trained officers with the Department of Homeland Security, office of U.S. Citizenship and Immigration Services, conduct in depth, in person interviews and collect fingerprints.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 5:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Arrival to the United States</Typography>
                        <ol start="14" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Screening for contagious diseases.</Typography></li>
                           <li><Typography component="body1" variant="body1">Cultural orientation classes.</Typography></li>
                           <li><Typography component="body1" variant="body1">Matched with an American resettlement agency.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Applicants attend cultural orientation classes to prepare them for adjusting to life in the United States. All refugees are assigned to a resettlement agency who determines where in the United States they will first arrive and prepares to assist them in their initial transition.</Typography>
                        <ol start="17" style={{ paddingTop: "1em" }} >
                           <li><Typography component="body1" variant="body1">Multi-agency security check before leaving for the United States.</Typography></li>
                           <li><Typography component="body1" variant="body1">Final security check at American airport.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">The United States has a proud tradition of welcoming refugees, including survivors of torture, yet the cap for admissions has been greatly reduced beginning in 2017. Today, as forced displacement globally has been rising and the scale and severity of refugee needs increases, the United States can and should continue to be a safe haven.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         default:
            return 'Unknown step';
      }
   }

   return (
      <div className={classes.stepperRoot}>
         <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
         <div>
            {activeStep === steps.length ? (
               <div>
                  <Typography className={classes.stepperInstructions}>All steps completed</Typography>
                  <Button onClick={handleReset}>Reset</Button>
               </div>
            ) : (
                  <div>
                     <Typography className={classes.stepperInstructions}>{getStepContent(activeStep)}</Typography>
                     <div>
                        <Button
                           disabled={activeStep === 0}
                           onClick={handleBack}
                           className={classes.stepperBackButton}
                        >
                           Back
              </Button>
                        <Button variant="contained" color="secondary" onClick={handleNext}>
                           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                     </div>
                  </div>
               )}
         </div>
      </div>
   )
}

function VettingProcessMobile() {
   const classes = useStyles();

   function getSteps() {
      return ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'];
   }

   function getStepContent(step) {
      switch (step) {
         case 0:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">United Nations Interview</Typography>
                        <ol style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Registration with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Interview with the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Refugee status granted by the United Nations.</Typography></li>
                           <li><Typography component="body1" variant="body1">Referral for resettlement in the United States.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Less than 1% of refugees globally are referred for third country resettlement. Before being considered for resettlement, most refugees must first register with the UN High Commissioner for Refugees (UNHCR). In making a referral, UNHCR conducts an in-depth assessment and background check. Only those who pass the screenings and have been determined to be among the most vulnerable and not a security risk are referred to the United States.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 1:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">State Department Interview</Typography>
                        <ol start="5" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Interview with State Department Contractors</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Resettlement Support Centers, funded by the U.S. government, conduct pre screening of all refugees applying for resettlement. During this phase, case files are created for those being considered.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 2:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">First Round of Background Checks</Typography>
                        <ol start="6" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">First background check.</Typography></li>
                           <li><Typography component="body1" variant="body1">Higher-level background check for some.</Typography></li>
                           <li><Typography component="body1" variant="body1">Another background check.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">U.S. security agencies screen candidates and conduct biographic security checks, starting with enhanced interagency checks. </Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 3:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Fingerprint screenings</Typography>
                        <ol start="9" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">First fingerprint screening; photo taken.</Typography></li>
                           <li><Typography component="body1" variant="body1">Second fingerprint screening.</Typography></li>
                           <li><Typography component="body1" variant="body1">Third fingerprint screening.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">The U.S conducts meticulous security screenings, which include: biographic and identity investigations, FBI biometric checks of fingerprints and photographs, medical screenings, other checks by U.S. domestic and international intelligence agencies including the National Counterterrorism Center/Intelligence Community and the FBI, refugees from some countries, such as Iraq and Syria, undergo an additional review through the Security Advisory Opinion process.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 4:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Homeland Security</Typography>
                        <ol start="12" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Extensive In-person interview with Homeland Security.</Typography></li>
                           <li><Typography component="body1" variant="body1">Homeland Security approval is required.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Specially trained officers with the Department of Homeland Security, office of U.S. Citizenship and Immigration Services, conduct in depth, in person interviews and collect fingerprints.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         case 5:
            return (
               <Container style={{ paddingBottom: "3em" }}>
                  <Row>
                     <Col sm={3} md={5}>
                        <img src="user_1.png" width="100%"></img>
                     </Col>
                     <Col sm={9} md={7}>
                        <Typography component="h4" variant="h4" color="secondary">Arrival to the United States</Typography>
                        <ol start="14" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Screening for contagious diseases.</Typography></li>
                           <li><Typography component="body1" variant="body1">Cultural orientation classes.</Typography></li>
                           <li><Typography component="body1" variant="body1">Matched with an American resettlement agency.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">Applicants attend cultural orientation classes to prepare them for adjusting to life in the United States. All refugees are assigned to a resettlement agency who determines where in the United States they will first arrive and prepares to assist them in their initial transition.</Typography>
                        <ol start="17" style={{ paddingTop: "1em" }}>
                           <li><Typography component="body1" variant="body1">Multi-agency security check before leaving for the United States.</Typography></li>
                           <li><Typography component="body1" variant="body1">Final security check at American airport.</Typography></li>
                        </ol>
                        <Typography component="body1" variant="body1">The United States has a proud tradition of welcoming refugees, including survivors of torture, yet the cap for admissions has been greatly reduced beginning in 2017. Today, as forced displacement globally has been rising and the scale and severity of refugee needs increases, the United States can and should continue to be a safe haven.</Typography>
                     </Col>
                  </Row>
               </Container>
            );
         default:
            return 'Unknown step';
      }
   }

   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <div className={classes.stepperRoot}>
         <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                     <Typography>{getStepContent(index)}</Typography>
                     <div className={classes.stepperMobileActionContainer}>
                        <div>
                           <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.stepperInstruction}
                           >
                              Back
                  </Button>
                           <Button
                              variant="contained"
                              color="secondary"
                              onClick={handleNext}
                              className={classes.stepperInstruction}
                           >
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                           </Button>
                        </div>
                     </div>
                  </StepContent>
               </Step>
            ))}
         </Stepper>
         {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.stepperMobileResetContainer}>
               <Typography>All steps completed - you&apos;re finished</Typography>
               <Button onClick={handleReset} className={classes.stepperInstruction}>
                  Reset
          </Button>
            </Paper>
         )}
      </div>
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
               <Box style={{ textAlign: 'center', paddingBottom: '30px' }}>
                  <Button variant="contained" color="secondary" href="/history" >More History</Button>
               </Box>
            </Box>
            <Box>
               <Divider title="MYTHS" />
               <Myths />
               <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                  <Button variant="contained" color="secondary" href="/myths" >More Myths</Button>
               </Box>
            </Box>
            <Box>
               <Divider title="TERMINOLOGY" />
               <Box className={classes.descriptionBox}>
                  <Typography component="body1" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fringilla dui, quis scelerisque sem. Pellentesque vitae enim ut diam placerat ullamcorper sit amet sed quam. Pellentesque a nisi nisi. Donec elit orci, consectetur et rhoncus id, tincidunt eu neque.</Typography>
               </Box>
               <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                  <Button variant="contained" color="secondary" href="/myths" >More Myths</Button>
               </Box>
            </Box>
            <Box>
               <Divider title="VETTING PROCESS" />
               <Box className={classes.descriptionBox}>
                  <Typography component="body1" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fringilla dui, quis scelerisque sem. Pellentesque vitae enim ut diam placerat ullamcorper sit amet sed quam. Pellentesque a nisi nisi. Donec elit orci, consectetur et rhoncus id, tincidunt eu neque.</Typography>
               </Box>

               {/* IN MOBILE */}
               <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  <VettingProcessMobile />
               </Hidden>
               <Hidden only={['xs']}>
                  <VettingProcess />
               </Hidden>

            </Box>
         </Container>
         {/* <FontTest /> */}
         {/* <Footer /> */}
      </div>
   );
}

export default Context; 
