import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Carousel from './Carousel';
import MythCard from './MythCard';

import Divider from './Divider';
import Hero from './Hero';
import { useStyles } from './Theme';

import CallToAction from './CallToAction';
import HomeFeatures from './HomeFeatures';

function HomePage() {
    const classes = useStyles();

    return (
        <div>
            {/* <Carousel /> */}
            <Hero />
            <Box className={classes.homeTopSpace}>
                {/* TO DO put in class but make the useStyles still function */}

                <Divider title="WHY IT MATTERS" />
                {/* <h1 className={classes.homeSectionTitle}>WHY IT MATTERS</h1> */}
                <h6 className={classes.homeSectionSubtext}>WHY IT MATTERS TO US & WHY IT SHOULD MATTER TO YOU.</h6>
                <p className={classes.text}>There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.  </p>
                <p className={classes.text}>Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.</p>
            </Box>
            <Box className={classes.homeSectionSpace}>
                <Divider title="MAKE A DIFFERENCE" />
                <Box className={classes.callToAction}>
                    <CallToAction />

                </Box>
            </Box>
            <Box className={classes.homeSectionSpace}>
                <Divider title="CASTAWAY FEATURES" />
                <HomeFeatures />
            </Box>

        </div>
    );
}

export default HomePage;