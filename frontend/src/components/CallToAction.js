import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import Tabs from '@material-ui/core/Tabs'; 
// import Tab from '@material-ui/core/Tab';
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { useStyles } from './Theme';


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

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function CallToAction() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.tabWrapper}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vert Tabs"
                className={classes.tabs}
            >
                <Tab label="Stay Informed" {...a11yProps(0)} />
                <Tab label="Vote" {...a11yProps(1)} />
                <Tab label="Contact Representative" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>

        </div>
    )
}


export default CallToAction;