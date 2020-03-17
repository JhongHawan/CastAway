import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// THIS FILE CONTAINS THE THEME



export const useStyles = makeStyles(theme => ({
    // FOR - Giving content margins
    heroContent: {
        padding: theme.spacing(3, 5, 0),
    },
    // FOR - Spacing for logo in About.js
    mainLogo: {
        marginRight: theme.spacing(2),
    },
    // FOR - Used with sectionTitle for big blue block section title
    sectionBlock: {
        backgroundColor: '#002851',
        padding: theme.spacing(7, 10, 7)
    },
    // FOR - Used with sectionBlock for white text
    sectionTitle: {
        color: '#ffffff',
        fontSize: '80px',
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 800,
        fontStyle: 'normal'
    },
    // FOR - White text
    sectionText: {
        color: '#ffffff',
    },
    // FOR - History icon in History.js
    historyIcon: {
        fontSize: '150px',
        filter: 'brightness(0) invert(1)',
    },
    // FOR - Storybook icon in Stories.js
    storyIcon: {
        fontSize: '150px',
        color: '#ffffff',
    },
    // FOR - Home section spacing
    homeSectionSpace: {
        padding: theme.spacing(3, 10, 0)
    },
    // FOR - Home section title (h1)
    homeSectionTitle: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        color: '#002851',
    },
    // FOR - Home section subtext (h6)
    homeSectionSubtext: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        padding: theme.spacing(1, 0, 1)
    },
    // FOR - All paragraphs 
    text: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
    }

}))

// export const useStyles;