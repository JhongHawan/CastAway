import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';
import {
    Typography,
    Card,
    CardActionArea,
    Button,
    Box,
    Paper
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BarGraph from './Charts/BarGraph';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, CardContent, CardActions } from '@material-ui/core';




function HomeFeatures() {
    const classes = useStyles();

    const DataLink = props => <Link to="/data" {...props} />

    const sampleData = [
        {
            year: '2012',
            origin_name: '',
            persons: '4'
        },
        {
            year: '2013',
            origin_name: '',
            persons: '15'
        },
        {
            year: '2014',
            origin_name: '',
            persons: '9'
        },
        {
            year: '2015',
            origin_name: '',
            persons: '32'
        },
        {
            year: '2016',
            origin_name: '',
            persons: '11'
        },
        {
            year: '2017',
            origin_name: '',
            persons: '44'
        },
        {
            year: '2018',
            origin_name: '',
            persons: '22'
        },
        {
            year: '2019',
            origin_name: '',
            persons: '30'
        }
    ];

    var storiesData = require('../refugee_stories.json');

    function StoryCard(props) {
        return (
            <Paper className={classes.storyPaper}>
                <Container>
                    <Row>
                        <Col>
                            <img className={classes.storyHighlightImage} src={storiesData[props.storyNum].img} width="100px" />
                        </Col>
                        <Col>
                            <Typography variant="overline" color="secondary">
                                I'm {storiesData[props.storyNum].name}.
                            </Typography>
                            <Typography variant="body1" color="primary">
                                My home is {storiesData[props.storyNum].home}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Paper>
        )
    }

    function ContextCard() {
        return (
            <Container>
                <Card>
                    <CardContent>
                        <Typography component='h5' variant='h5' color='primary' gutterBottom>All refugees are terrorists with a violent agenda.</Typography>
                        <Box style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>

                            <Box style={{ backgroundColor: '#F79C99', borderRadius: '10px', padding: '5px', alignText: 'center', width: '10rem' }}>
                                <Typography component="overline" variant="overline" style={{ fontWeight: "700", color: 'white' }}>
                                    CONFIRMED FALSE
                                </Typography>
                            </Box>
                        </Box>
                        <Typography component='body1' variant='body1' className={classes.factDetail}>
                            <strong>Fact Check:</strong> Refugees are fleeing from violence and terrorism, they are the victims of this kind of oppression back home.
                    </Typography>
                    </CardContent>
                </Card >
                <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                    <Button variant="contained" color="secondary" href="/myths" >More Myths</Button>
                </Box>
            </Container>
        )
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col md={7}>
                        <Col>
                            <Row>
                                <Typography component="h5" variant="h5" color="secondary" className={classes.featureHeading}>
                                    DATA VISUALIZATION
                                </Typography>
                            </Row>
                            <Row>
                                <Typography component="subtitle1" variant="subtitle1">Sample Chart <a href='/data'>Data Page</a></Typography>
                            </Row>
                            <Row>
                                <CardActionArea
                                    href='/data'
                                // component={DataLink}
                                >
                                    <Card style={{ padding: '2.5%' }}>
                                        <BarGraph color="#F16841" data={sampleData} />
                                    </Card>
                                </CardActionArea>
                            </Row>
                            <Row>
                                <Col>
                                    <Box style={{ paddingTop: '1rem' }}>
                                        <Typography component="body1" variant="body1">
                                            The data visualization page allows users to create data visualizations from UNHCR refugee data. You can filter what data you would like to query such as origin country, destination country, and date.
                                    </Typography>
                                    </Box>
                                    <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                                        <Button variant="contained" color="secondary" href="/data" >More Data</Button>
                                    </Box>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col md={4}>
                        <Col>
                            <Row>
                                <Col>
                                    <Row>
                                        <Typography component="h5" variant="h5" color="secondary" className={classes.featureHeading}>
                                            STORIES
                                        </Typography>
                                    </Row>
                                    <Row>
                                        {/* TODO INSERT STORIES */}
                                        <Col className={classes.storyCol}>
                                            <StoryCard storyNum="1" />
                                            {/* <img src="https://via.placeholder.com/100x100.png?text=TEMP" /> */}
                                        </Col>
                                        <Col className={classes.storyCol}>
                                            <StoryCard storyNum="4" />
                                        </Col>
                                    </Row>
                                    <Row style={{ textAlign: 'center' }}>
                                        <Col>
                                            <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                                                <Button variant="contained" color="secondary" href="/stories" >More Stories</Button>
                                            </Box>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <Row>
                                        <Typography component="h5" variant="h5" color="secondary" className={classes.featureHeading}>
                                            MYTHS
                                        </Typography>
                                    </Row>
                                    <Row>
                                        <ContextCard
                                        />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeFeatures;