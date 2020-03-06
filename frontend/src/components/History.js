import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';
import Timeline from './Timeline';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heroContent: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 5, 0),
    },
    sectionBlock: {
        backgroundColor: '#002851',
        padding: theme.spacing(7, 10, 7)
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: '80px',
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 800,
        fontStyle: 'normal'
    },
    sectionText: {
        color: '#ffffff',
    },
    testSection: {
        fontSize: '150px',
        // makes it white
        filter: 'brightness(0) invert(1)',
        


    }

}))

function History() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.sectionBlock}>
                <Box>
                    <Grid container spacing={5} >
                        {/* TODO vertically align center */}
                        <Grid item>
                            {/* <MenuBookIcon className={classes.testSection} /> */}
                            <img className={classes.testSection} src="history_icon.png" width="100px"/>
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
            </Box>

            <Timeline />
        </div>
    );
}

export default History; 
