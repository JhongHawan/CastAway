import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import heroImage from '../img/home_hero.jpg';

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
    heading1spacing: {
        padding: theme.spacing(1, 1, 0)
    },
    subHeading: {
        padding: theme.spacing(2, 4, 1)
    },
    subHeadingTitle: {
        color: '#52616B',
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'expanded'
    },
    hamburgerIcon: {
        // Customize the navbar hamburger menu later. 
        borderColor: "#f31baa"
    },
    navTitle: {
        color: '#F16841',
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    navLink: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#52616B',
        // backgroundColor: '#52616B'

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
    mythSectionColor: {
        backgroundColor: '#F0F5F9'
    },
    // FOR - Storybook icon in Stories.js
    storyIcon: {
        fontSize: '150px',
        color: '#ffffff',
    },
    // FOR - Home section spacing
    homeSectionSpace: {
        padding: theme.spacing(10, 10, 0)
    },
    homeTopSpace: {
        padding: theme.spacing(15, 10, 0)
    },
    // FOR - Home section title (h1)
    homeSectionTitle: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        color: '#002851',
        fontSize: '30px',
        textAlign: 'center'
    },
    // FOR - Home section subtext (h6)

    homeSectionSubtext: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        // padding: theme.spacing(1, 0, 1)
    },
    // FOR - All paragraphs 
    text: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
    },
    dividerTitle: {
        width: '100%',
        textAlign: 'center',
        borderBottom: '2px solid #F16841',
        lineHeight: '0.1em',
        margin: '10px 0 20px',
        color: '#002851',
    },
    dividerSpan: {
        background: '#fff',
        padding: '0 20px'
    },
    dividerWrapper: {
        padding: theme.spacing(0, 10, 0)
    },
    lineBreak: {
        background: '#F16841',
        height: '2px'
    },
    heroImg: {
        backgroundImage: `url(${heroImage})`,
        position: 'relative',
        backgroundSize: 'cover',
        height: 500,
        justifyContent: 'center',
        display: 'flex',
        // TODO make reactive

        // spacing below 
    },
    heroText: {
        // textAlign: 'center',
    },
    heroChild: {
        position: 'absolute',
        bottom: "-15%",
        // height: '15vw',
        background: '#C9D6DF',
        // width: '60vw',
        maxWidth: '60vw',
        zIndex: 2,
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)"
        // margin: 'auto',
        // minHeight: '100vh'
        // margin: theme.spacing(20, 0, 0)
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    },
    tabContent: {
        minWidth: 200,
        width: 200,
    },
    tabAction: {
        backgroundColor: '#C9D6DF',
    },
    tabWrapper: {
        flexGrow: 1,
        // backgroundColor: 'green',
        display: 'flex',
        // height: 224
    },
    mobileTabWrapper: {
        // width: 600
    },
    callToAction: {
        padding: theme.spacing(5, 0, 0)
    },
    featureHeading: {
        color: '#F16841',
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        textDecoration: 'none',
        padding: theme.spacing(0, 0, 1)
    },
    featureSubheading: {
        color: '#002851',
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        textDecoration: 'none',
        padding: theme.spacing(0.5, 0, 0)
    },
    callToActionPadding: {
        padding: theme.spacing(4, 4, 2)
    },
    root: {
        flex: 'grow'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        margin: '0.5em'
    },
    testToggle: {
        backgroundColor: 'green'
    },
    redButton: {
        backgroundColor: 'red'
    }, 
    greenButton: {
        backgroundColor: 'green' 
    }

}))

// export const useStyles;