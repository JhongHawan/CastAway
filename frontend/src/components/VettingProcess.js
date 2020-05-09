import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Box, Button, Typography, Paper, Step, Stepper, StepButton, Hidden, StepLabel, StepContent, MobileStepper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { useStyles } from './Styles';
import Divider from './Divider';
import Hero from './Hero';


function VettingProcess() {
    const classes = useStyles();

    return (
        <div>
            <Hero
                showCard={false}
                sectionTitle="Vetting Process"
            />
            <Container>

                <Divider title="VETTING PROCESS" />

                {/* STEP 1 */}
                <Container style={{ paddingBottom: "3em" }}>
                    <Row>
                        <Col className={classes.vettingTitle}>
                            <Typography component="h4" variant="h4" color="secondary" >
                                Stage 1 - United Nations Interview
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={5}>
                            <img src="vetting_un.jpg" width="100%" />
                            {/* <Typography variant="subtitle1">UN emblem blue.svg. (2020, April 10). Wikimedia Commons, the free media repository.</Typography> */}
                        </Col>
                        <Col sm={9} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
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

                {/* STEP 2 */}

                <Container style={{ paddingBottom: "3em" }}>

                    <Row>
                        <Col className={classes.vettingTitle}>
                            <Typography component="h4" variant="h4" color="secondary" >
                                Stage 2 - State Department Interview
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="5" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Interview with State Department Contractors</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">Resettlement Support Centers, funded by the U.S. government, conduct pre screening of all refugees applying for resettlement. During this phase, case files are created for those being considered.</Typography>
                        </Col>
                        <Col sm={3} md={5}>
                            <img src="vetting_usds.jpg" width="100%"></img>
                            {/* <Typography variant="subtitle1">Flag of the United States Department of State.svg. (2020, March 29). Wikimedia Commons, the free media repository.</Typography> */}
                        </Col>
                    </Row>
                </Container>


                {/* STEP 3 */}
                <Container style={{ paddingBottom: "3em" }}>
                    <Row>
                        <Col className={classes.vettingTitle}>
                            <Typography component="h4" variant="h4" color="secondary">
                                Stage 3 - First Round of Background Checks
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={5}>
                            <img src="vetting_magnifying.jpg" width="100%"></img>
                        </Col>
                        <Col sm={9} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="6" style={{ paddingTop: "1em", }} >
                                <li><Typography component="body1" variant="body1">First background check.</Typography></li>
                                <li><Typography component="body1" variant="body1">Higher-level background check for some.</Typography></li>
                                <li><Typography component="body1" variant="body1">Another background check.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">U.S. security agencies screen candidates and conduct biographic security checks, starting with enhanced interagency checks. </Typography>
                        </Col>
                    </Row>
                </Container>

                {/* STEP 4 */}

                <Container style={{ paddingBottom: "3em" }}>
                    <Row>
                        <Col className={classes.vettingTitle}>
                            <Typography component="h4" variant="h4" color="secondary" >
                                Stage 4 - Fingerprint screening
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            {/* <Typography component="h4" variant="h4" color="secondary">Fingerprint screenings</Typography> */}
                            <ol start="9" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">First fingerprint screening; photo taken (FBI).</Typography></li>
                                <li><Typography component="body1" variant="body1">Second fingerprint screening (Homeland Security).</Typography></li>
                                <li><Typography component="body1" variant="body1">Third fingerprint screening (Defense Department).</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">The U.S conducts meticulous security screenings, which include: biographic and identity investigations, FBI biometric checks of fingerprints and photographs, medical screenings, other checks by U.S. domestic and international intelligence agencies including the National Counterterrorism Center/Intelligence Community and the FBI, refugees from some countries, such as Iraq and Syria, undergo an additional review through the Security Advisory Opinion process.</Typography>
                        </Col>
                        <Col sm={3} md={5}>
                            <img src="vetting_screening.jpg" width="100%"></img>
                        </Col>
                    </Row>
                </Container>

                {/* STEP 5 */}
                <Container style={{ paddingBottom: "3em" }}>
                    <Row>
                        <Col className={classes.vettingTitle}>
                            <Typography component="h4" variant="h4" color="secondary" >
                                Stage 5 - Homeland Security
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={5}>
                            <img src="Seal_of_the_United_States_Department_of_Homeland_Security.svg" width="100%" />
                            {/* <Typography variant="subtitle1">Seal of the United States Department of Homeland Security.svg. (2017, November 2). Wikimedia Commons, the free media repository.</Typography> */}
                        </Col>
                        <Col sm={9} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="12" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Extensive In-person interview with Homeland Security.</Typography></li>
                                <li><Typography component="body1" variant="body1">Homeland Security approval is required.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">Specially trained officers with the Department of Homeland Security, office of U.S. Citizenship and Immigration Services, conduct in depth, in person interviews and collect fingerprints.</Typography>
                        </Col>
                    </Row>
                </Container>

                {/* STEP 6 */}
                <Container style={{ paddingBottom: "3em" }}>
                    <Row>
                        <Col className={classes.vettingTitle}>
                            <Typography component="h4" variant="h4" color="secondary" >
                                Stage 6 - Arrival to the United States
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} md={7} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            {/* <Typography component="h4" variant="h4" color="secondary">Arrival to the United States</Typography> */}
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
                        <Col sm={3} md={5}>
                            <img src="vetting_travel.jpg" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default VettingProcess;