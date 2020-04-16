import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import Carousel from './Carousel';
import MythCard from './MythCard';

import Divider from './Divider';
import Hero from './Hero';
import { useStyles } from './Styles';

import CallToAction from './CallToAction';
import HomeFeatures from './HomeFeatures';

function HomePage() {
    const classes = useStyles();



    return (
        <Container disableGutters>

            <Hero />
            {/* Different design for mobile */}
            <Box className={classes.homeTopSpace}>
                <Divider title="MAKE A DIFFERENCE" />
                <Box className={classes.callToAction}>
                    <CallToAction />
                </Box>
            </Box>
            
            <Box className={classes.homeSectionSpace}>
                <Divider title="CASTAWAY FEATURES" />
                <HomeFeatures />
            </Box>


        </Container>
    );
}

export default HomePage;