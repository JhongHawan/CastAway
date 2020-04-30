import React from 'react';
import { Container, Box, Grid, Typography, Paper, Button } from '@material-ui/core';
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

    function ReasonCard(props) {
        return (
            <Col md={4}>
                <Box style={{ textAlign: 'center' }}>
                    <img src={props.img} width="300px" />
                    <Typography variant="h4" color="secondary" style={{ paddingBottom: "0.5em" }}>
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.description}
                    </Typography>
                </Box>
            </Col>
        )
    }


    // TODO Move Why Does it Matter to new function
    return (
        <div>
            {/* <Container disableGutters> */}
            {/* <Box className={classes.homeSectionSpace}> */}
            <Divider title="WHY DOES IT MATTER?" />
            <Container>
                <Row>
                    <ReasonCard
                        title="Millions Displaced"
                        description="There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18."
                        img="displaced.png"
                    />
                    <ReasonCard
                        title="Global Crisis"
                        description="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
                        img="crisis.png"
                    />
                    <ReasonCard
                        title="Immigrant Built"
                        description="Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them."
                        img="built.png"
                    />
                </Row>
            </Container>
            <Divider title="MAKE A DIFFERENCE" />
            {/* <Box className={classes.callToAction}> */}
            <CallToAction />
            <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                <Button variant="contained" color="secondary" href="/yourRole" >What's My Role?</Button>
            </Box>
            {/* </Box> */}
            {/* </Container> */}
            <Divider title="WHAT IS CASTAWAY?" />
            <HomeFeatures />
        </div>
    );
}

export default HomePage;