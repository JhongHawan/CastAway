import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';
import Timeline from './Timeline';


import { useStyles } from './Styles';

import Hero from './Hero';
import Footer from './About/Footer';


function History() {
    const classes = useStyles();
    return (
        <div>
            <Hero
                showCard={false}
                sectionTitle="History"
            />
            {/* <Box className={classes.sectionBlock}>
                <Box>
                    <Grid container spacing={5} >
                        <Grid item>
                            <img className={classes.historyIcon} src="history_icon.png" width="100px"/>
                        </Grid>
                        <Grid item sm={9}>
                            <h1 className={classes.sectionTitle}>
                                HISTORY.
                            </h1>
                            <h6 className={classes.sectionText}>
                                To understand the crisis you need to understand the history.
                            </h6>
                        </Grid>
                    </Grid>

                </Box>
            </Box> */}

            <Timeline />
            <Footer />
        </div>
    );
}

export default History; 
