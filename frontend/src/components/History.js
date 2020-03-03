import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import ReactCompareImage from 'react-compare-image';
import ContextCard from './ContextCard';
import Timeline from './Timeline';


function History() {
    return (
        <div>
            <Box className="sectionGradient">
                <Box className="heading1">
                    <h1 className="bigTitle titleCenter">HISTORY</h1>
                    <h3 className="titleCenter">To understand the crisis you need to understand the history.</h3>
                </Box>
            </Box>

            <Timeline />
        </div>
    );
}

export default History; 
