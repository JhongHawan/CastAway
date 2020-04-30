import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';
import { 
    Typography, 
    Card,
    CardActionArea,
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BarGraph from './Charts/BarGraph'; 



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
                                    <Card style={{ padding: '2.5%'}}>
                                        <BarGraph color="#F16841" data={sampleData} />
                                    </Card>
                                </CardActionArea>
                            </Row>
                            <Row>
                                <Typography component="body1" variant="body1">
                                    The data visualization page allows users to create data visualizations from UNHCR refugee data. You can filter what data you would like to query such as origin country, destination country, and date. 
                                </Typography>
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
                                        <img src="https://via.placeholder.com/100x100.png?text=TEMP" />
                                    </Row>
                                    <Row>
                                        <Typography component="subtitle1" variant="subtitle1">Subtitle</Typography>
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
                                        <Col>
                                            <Row>
                                                <div>BOX 1</div>
                                            </Row>
                                            <Row>
                                                <div>BOX 2</div>
                                            </Row>
                                        </Col>
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