import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';
import { Typography } from '@material-ui/core';



function HomeFeatures() {
    const classes = useStyles();

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
                                <Typography component="subtitle1" variant="subtitle1">Subtitle</Typography>
                            </Row>
                            <Row>
                                <img src="https://via.placeholder.com/250x167.png?text=TEMP" />
                            </Row>
                            <Row>
                                <Typography component="body1" variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis in eu mi. Sit amet purus gravida quis blandit. Odio euismod lacinia at quis.
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