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
        textDecoration: 'none',
       
    },
    navLink: {
        fontFamily: 'zeitung, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#52616B',

        '&:hover': {
            color: '#F16841',
        }

    },
    // ! testing delete later
    // testingDarkTheme: {
    //     color: theme.palette.main
    // },
    testingWarningTheme: {
        color: theme.palette.warning.main,
    },
    testingInfoTheme: {
        color: theme.palette.info.main
    },
    testingSuccessTheme: {
        color: theme.palette.success.main
    },


    // ! ending theme testing
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

    parallaxHero: {
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        height: '80vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        display: 'flex',
        // position: 'relative'
    },

    heroImg: {
        // backgroundImage: `url(${testHero})`,
        backgroundImage: `url(${heroImage})`,
        position: 'relative',
        backgroundSize: 'cover',
        height: 500,
        // height: 300,
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
    // * Used in CallToAction > VerticalTab > TabPanel > Tabs
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    },
    // * Used in CallToAction > VerticalTab > TabPanel > Tabs
    tabContent: {
        minWidth: 200,
        width: 200,
    },
    // * Used in CallToAction > MobileTabs > MobileContent > Container
    tabAction: {
        backgroundColor: '#F0F5F9',
    },
    // * Used in CallToAction > VerticalTab > TabPanel
    tabWrapper: {
        flexGrow: 1,
        display: 'flex',
    },
    // * Inside HomeFeatures.js
    featureHeading: {
        padding: theme.spacing(0, 0, 1)
    },
    // * Used in CallToAction > MobileTabs > MobileContent > Typography h5 & overline
    featureSubheading: {
        padding: theme.spacing(0, 0, 3)
    },
    callToActionPadding: {
        padding: theme.spacing(4, 4, 2)
    },
    root: {
        flex: 'grow'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex', 
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        fontSize: '0.9rem'
    },
    greenBorder: {
        fontSize: '100px',
        borderColor: 'green',
        borderWidth: '3px'
    },
    redBorder: {
        borderColor: 'red',
        borderWidth: '3px'
    },
    redButton: {
        backgroundColor: 'red'
    },
    greenButton: {
        backgroundColor: 'green'
    },
    // * used in Myth.js FactCheck
    factTitle: {
        padding: theme.spacing(0, 0, 2)
    },
    // * used in Myth.js FactCheck
    factDetail: {
        padding: theme.spacing(2, 0, 0)
    },


    // ! Working section
    storyWrapper: {
        textAlign: 'center',
        paddingTop: '2rem'
        // paddingTop: theme.spacing(, 0, 0)
    },
    storyCard: {
        padding: theme.spacing(2, 2, 2),
        '&:hover': {
            cursor: 'pointer'
        }
    },
    
    descriptionBox: {
        padding: theme.spacing(0, 0,4)
    },

    imageStory: {
        position: 'relative',
        width: '200px',
        height: '200px',

        '& img': {
            width: '100%',
            verticalAlign: 'top',

            borderRadius: '10px',
            filter: 'grayscale(1)',
            // transitionDelay: '0.2s',
        },

        '&::after, &::before': {
            content: '""',
            position: 'absolute',
            opacity: 0,
            transition: 'all 0.5s',
            WebkitTransition: 'all 0.5s'
        },

        '&::after': {
            content: '""',
            borderRadius: '10px',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0,0,0,0.4)'
        },

        '&::before': {
            content: 'attr(data-content)',
            width: '100%',
            color: '#fff',
            zIndex: 1,
            bottom: 0,
            padding: '4px 10px',
            // textAlign: 'center',
            // background: 'red',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box'
        },

        '&:hover': {
            '& img': {
                filter: 'grayscale(0)',
            },
            '&::before': {
                // content: '""',
                opacity: 1,
            },
            '&::after': {
                // content: '""',
                opacity: 1,
            }
        }
    },
    storyPaper: {
        padding: theme.spacing(2),
    },
    storyCol: {
        padding: theme.spacing(1)
    },

    // Stepper Styles
    stepperRoot: {
        width: '100%'
    },
    stepperButton: {
        marginRight: theme.spacing(1),
        
    },
    stepperBackButton: {
        marginRight: theme.spacing(1),
    },
    stepperInstruction: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    // Stepper Mobile
    stepperMobileActionContainer: {
        marginBottom: theme.spacing(2)
    },
    stepperMobileResetContainer: {
        padding: theme.spacing(3)
    }, 
    storyHighlightImage : {
        borderRadius: '10px',
    },
    storyHighlightContainer : {
        padding: theme.spacing(5, 0, 5),
        // backgroundColor: 'yellow',
        // margin: 0
    },
    storyHighlight: {
        '& h4': {
            padding: theme.spacing(0, 0, 1)
        },
        '& h5': {
            padding: theme.spacing(0, 0, 1)
        },
        '& overline': {
            padding: theme.spacing(0, 0, 1)
        }
    },
    historyScroll: {
        // backgroundColor: '#333',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        '& div': {
            display: 'inline-block',
            // color: 'white',
            textAlign: 'center',
            padding: theme.spacing(2),
            // textDecoration: 'none'
            '& h6:hover': {
                color: theme.palette.primary.main,
                cursor: 'pointer'
            }
        },

        

    },
    vettingTitle: {
        padding: theme.spacing(2, 0, 2)
    },
    termCard: {
        padding: theme.spacing(2),
        display: 'flex', 
        height: '330px',
    },

}));