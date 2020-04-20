import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import Tabs from '@material-ui/core/Tabs'; 
// import Tab from '@material-ui/core/Tab';
import { Container, Box, Tabs, Tab, Typography, AppBar, Grid } from '@material-ui/core';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';

import TabAction from './TabAction';

import Hidden from '@material-ui/core/Hidden';

import { useTheme } from '@material-ui/core';

import { Col, Row } from 'react-bootstrap';


// This function returns tabs for big screens
function VerticalTab() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };


    return (
        <Container className={classes.tabWrapper}>
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="Vert Tabs"
                className={classes.tabs, classes.tabContent}
            >
                <Tab label="Vote" {...a11yProps(0)} />
                <Tab label="Stay Informed" {...a11yProps(1)} />
                <Tab label="Take Action" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TabAction
                    caption="Vote"
                    img="./vote.jpg"
                    description="Often with political issues people assume that they don’t have enough power to do anything, that they are not strong enough to make a difference. This however is one of the most harmful mindsets to have. Every citizen has both the right and responsibility to vote, get involved in their communities, and enact the change they wish to see. Voting is a basic action that allows every individual in the United States to express their personal opinion on issues they consider important to them."
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabAction
                    caption="Stay Informed"
                    img="./informed.jpg"
                    description="It doesn’t just end there. There are many more ways beyond just voting to get your voice heard. It is important to know what is going on in your community and ultimately your country. Staying up to date with news and policies allows for informed opinions that have more impact. On the other side of things, misinformation and fake news are both extremely dangerous and harmful when it comes to politics, society, and the ability for the public to make knowledgeable decisions. "
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabAction
                    caption="Take Action"
                    img="./call.jpg"
                    description="Individuals can also make a lot of impact by writing letters to public officials about issues that are important to them. Your congressmen all represent you, your voice. Shedding light on important topics and letting your representatives know ignites a conversation with endless possibilities.
                    It is your chance to make a change. No action is too small. It is time to stand up and fight for what is right, and give a platform to those who haven’t had access to it in the past."
                />
            </TabPanel>
        </Container>
    );
}


function MobileTabs() {
    const classes = useStyles();

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    function MobileContent(props) {
        return (
            <Container className={classes.tabAction}>
                <Row>
                    <Col sm={12}>
                        <Col>
                            <Row>
                                <img src={props.img} width="200px" />
                            </Row>
                            <Row>
                                <Typography component="h5" variant="h5" color="primary" className={classes.featureSubheading}>
                                    {props.caption}
                                </Typography>
                            </Row>
                        </Col>
                    </Col>
                    <Col sm={12}>
                        <Col>
                            <Row>
                                <Typography component="body1" variant="body1">
                                    {props.description}
                                </Typography>
                            </Row>
                            <Row>
                                <Typography component="overline" variant="overline" className={classes.featureSubheading}>
                                    Read More
                                </Typography>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )

    }

    return (
        <div className={classes.tabAction}>
            <Container className={classes.callToActionPadding}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="call to action"
                    >
                        <Tab label="Vote" {...a11yProps(0)} />
                        <Tab label="Stay Informed" {...a11yProps(1)} />
                        <Tab label="Take Action" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <MobileContent
                        caption="Vote"
                        img="./vote.jpg"
                        description="Often with political issues people assume that they don’t have enough power to do anything, that they are not strong enough to make a difference. This however is one of the most harmful mindsets to have. Every citizen has both the right and responsibility to vote, get involved in their communities, and enact the change they wish to see. Voting is a basic action that allows every individual in the United States to express their personal opinion on issues they consider important to them."
                    />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <MobileContent
                        caption="Stay Informed"
                        img="./informed.jpg"
                        description="It doesn’t just end there. There are many more ways beyond just voting to get your voice heard. It is important to know what is going on in your community and ultimately your country. Staying up to date with news and policies allows for informed opinions that have more impact. On the other side of things, misinformation and fake news are both extremely dangerous and harmful when it comes to politics, society, and the ability for the public to make knowledgeable decisions. "
                    />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <MobileContent
                        caption="Take Action"
                        img="./call.jpg"
                        description="Individuals can also make a lot of impact by writing letters to public officials about issues that are important to them. Your congressmen all represent you, your voice. Shedding light on important topics and letting your representatives know ignites a conversation with endless possibilities.
                    It is your chance to make a change. No action is too small. It is time to stand up and fight for what is right, and give a platform to those who haven’t had access to it in the past."
                    />
                </TabPanel>
            </Container>
        </div>
    )


}


function CallToAction() {
    const classes = useStyles();


    return (
        <Container disableGutters>
            {/* Hide component when screen small */}
            <Hidden smDown>
                <VerticalTab />
            </Hidden>

            {/* Hide component when screen small */}
            <Hidden mdUp>
                <MobileTabs />
            </Hidden>

        </Container>
    )
}


export default CallToAction;