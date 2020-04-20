import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';
import TimelineFunction from './Timeline';


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
            <TimelineFunction />
            <Footer />
        </div>
    );
}

export default History; 
