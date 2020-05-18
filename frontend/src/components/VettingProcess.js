import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
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

                <Divider title="Vetting Process" />

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
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }} md={{ span: 6, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Registration with the United Nations.</Typography></li>
                                <li><Typography component="body1" variant="body1">Interview with the United Nations.</Typography></li>
                                <li><Typography component="body1" variant="body1">Refugee status granted by the United Nations.</Typography></li>
                                <li><Typography component="body1" variant="body1">Referral for resettlement in the United States.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                Of the thousands of refugees looking for resettlement less than 1% are referred. The first step of the process includes them registering with the UN High Commissioner for Refugees (UNHCR). Once they have registered, the UNHCR can refer them for resettlement. Part of the process involves an assessment by the UNHCR and a background check. The ones that are given a green light are determined to not pose a security risk to the United States and can move forward with the vetting process.
                            </Typography>
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
                        <Col sm={8} md={6} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="5" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Interview with State Department Contractors</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                There are Resettlement Support Centers that conduct background checks and screenings of all refugees that apply for resettlement. This step involves the creation of case files for the refugees that will be moving forward. Getting a case file is hopeful but it doesn't mean that the refugee will be allowed resettlement.
                            </Typography>
                        </Col>
                        <Col sm={{ span: 3, offset: 1 }} md={{ span: 5, offset: 1 }}>
                            <img src="vetting_usds.jpg" width="100%"></img>
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
                        <Col sm={{ span: 8, offset: 1 }} md={{ span: 6, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="6" style={{ paddingTop: "1em", }} >
                                <li><Typography component="body1" variant="body1">First background check.</Typography></li>
                                <li><Typography component="body1" variant="body1">Higher-level background check for some.</Typography></li>
                                <li><Typography component="body1" variant="body1">Another background check.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                Several US security agencies begin to screen candidates by conducting several layers of background checks and assessments. This process also includes interagency checks.
                            </Typography>
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
                        <Col sm={8} md={6} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="9" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">First fingerprint screening; photo taken (FBI).</Typography></li>
                                <li><Typography component="body1" variant="body1">Second fingerprint screening (Homeland Security).</Typography></li>
                                <li><Typography component="body1" variant="body1">Third fingerprint screening (Defense Department).</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                Several US security agencies including the FBI, Homeland Security, and the Defense Department begin conducting biographic security checks as well as interagency checks. These agencies take fingerprints, photographs, and conduct medical screenings from the candidates and check for known terrorists, warrants, and affiliations. They will run the candidates' information against the National Counterterrorism Center, Intelligence Communities, and the FBi. If there is even slight uncertainty of the refugees’ motives they will not advance in the process. Certain refugees from known countries are forced to undergo further review before progressing.
                            </Typography>
                        </Col>
                        <Col sm={{ span: 2, offset: 1 }} md={{ span: 4, offset: 1 }}>
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
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }} md={{ span: 6, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="12" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Extensive In-person interview with Homeland Security.</Typography></li>
                                <li><Typography component="body1" variant="body1">Homeland Security approval is required.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                Specially trained interrogation officers from the Department of Homeland Security and the office of Immigration Services will begin to conduct in person interviews as well as collect a second round of fingerprints and other necessary data. The candidate will not progress if Homeland Security does not approve it.
                            </Typography>
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
                        <Col sm={8} md={6} style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ol start="14" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Screening for contagious diseases.</Typography></li>
                                <li><Typography component="body1" variant="body1">Cultural orientation classes.</Typography></li>
                                <li><Typography component="body1" variant="body1">Matched with an American resettlement agency.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                Applicants that reach Stage 6 are the closest to gaining resettlement, Although they are not finished with the process yet they are very close. They are screened for contagious diseases and are required to attend cultural orientation classes to help them adjust to life in the United States. Refugees are also assigned to American resettlement agencies who determine where in America they will land and what their first few months will look like. They also aid in the initial transition.
                            </Typography>
                            <ol start="17" style={{ paddingTop: "1em" }} >
                                <li><Typography component="body1" variant="body1">Multi-agency security check before leaving for the United States.</Typography></li>
                                <li><Typography component="body1" variant="body1">Final security check at American airport.</Typography></li>
                            </ol>
                            <Typography component="body1" variant="body1">
                                Once refugees begin their journey they undergo another security check before leaving the United States and one final security check once they arrive at the American airport. Once refugees are in the United States they are safe from the violence back home but are forced to deal with the difficulty of building a new life in a foriegn country.
                            </Typography>
                        </Col>
                        <Col sm={{ span: 2, offset: 1 }} md={{ span: 4, offset: 1 }}>
                            <img src="vetting_travel.jpg" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default VettingProcess;