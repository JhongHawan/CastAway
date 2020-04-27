import React from 'react';
import { Container, Box, Grid, Typography, Paper } from '@material-ui/core';
import Carousel from './Carousel';
import MythCard from './MythCard';

import { Col, Row } from 'react-bootstrap';

import Divider from './Divider';
import Hero from './Hero';
import { useStyles } from './Styles';
import CallToAction from './CallToAction';
import HomeFeatures from './HomeFeatures';

function HomePage() {
    const classes = useStyles();


    // TODO Move Why Does it Matter to new function
    return (
        <div>
            {/* <Container disableGutters> */}
            <Box className={classes.homeSectionSpace}>
                <Divider title="WHY DOES IT MATTER?" />
                <Container>
                    <Row>
                        <Col md={4}>
                            <Box style={{ textAlign: 'center' }}>
                                <img src="displaced.png" width="300px" />
                                <Typography variant="h4" color="secondary">
                                    Millions Displaced
                                </Typography>
                                <Typography variant="body1">
                                    There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18.
                                </Typography>
                            </Box>
                        </Col>
                        <Col md={4}>
                            <Box style={{ textAlign: 'center' }}>
                                <img src="crisis.png" width="300px" />
                                <Typography variant="h4" color="secondary">
                                    Global Crisis
                                </Typography>
                                <Typography variant="body1">
                                    The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.
                                </Typography>
                            </Box>
                        </Col>
                        <Col md={4}>
                            <Box style={{ textAlign: 'center' }}>
                                <img src="built.png" width="300px" />
                                <Typography variant="h4" color="secondary">
                                    Immigrant Built
                                </Typography>
                                <Typography variant="body1">
                                    Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.
                                </Typography>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </Box>
            {/* Different design for mobile */}
            <Box className={classes.homeTopSpace}>
                <Divider title="MAKE A DIFFERENCE" />
                <Box className={classes.callToAction}>
                    <CallToAction />
                </Box>
            </Box>
            {/* </Container> */}
            <Box style={{ padding: 50 }}>
                <Divider title="WHAT IS CASTAWAY?" />

            </Box>
            <Box style={{ background: '#C9D6DF', padding: 20 }}>
                <Container disableGutters>
                    <Row>
                        <Col lg={{ span: 4, offset: 1}}>
                            <Typography variant="h4" color="secondary">WHY A PAPER BOAT?</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 4, offset: 1 }} style={{ padding: 20, float: 'right' }}>
                            <img src="castawayLogo.png" width="50%" />
                        </Col>
                        <Col lg={{ offset: 2}}>
                            <Typography component="body1" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nulla dictum ligula ultrices sodales. Aliquam vehicula dolor vitae lacus elementum, vel iaculis eros convallis. Cras porttitor ex eu purus finibus cursus. Donec gravida felis vel malesuada faucibus. Vivamus ut ultricies purus, vitae auctor ipsum. Nulla et porta dolor, quis gravida metus. Fusce sollicitudin urna eros, vel dictum diam tempus vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Typography>
                        </Col>
                    </Row>
                </Container>

            </Box>
            <Box className={classes.homeSectionSpace}>
                {/* <Divider title="CASTAWAY FEATURES" /> */}
                <HomeFeatures />
            </Box>
        </div>
    );
}

export default HomePage;