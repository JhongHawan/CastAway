import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';



function HomeFeatures() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Row>
                    <Col md={7}>
                        <Col>
                            <Row>
                                <h5 className={classes.featureHeading}>
                                    DATA VISUALIZATION
                                </h5>
                            </Row>
                            <Row>
                                <h6 className={classes.featureSubheading}>
                                    Subtitle
                                </h6>
                            </Row>
                            <Row>
                                <img src="https://via.placeholder.com/250x167.png?text=TEMP" />
                            </Row>
                            <Row>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis in eu mi. Sit amet purus gravida quis blandit. Odio euismod lacinia at quis.
                                </p>
                            </Row>
                        </Col>
                    </Col>
                    <Col md={4}>
                        <Col>
                            <Row>
                                <Col>
                                    <Row>
                                        <h5 className={classes.featureHeading}>
                                            STORIES
                                        </h5>
                                    </Row>
                                    <Row>
                                        <img src="https://via.placeholder.com/100x100.png?text=TEMP" />
                                    </Row>
                                    <Row>
                                        <h6 className={classes.featureSubheading}>
                                            Subtitle
                                        </h6>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    
                                    <Row>
                                        <h5 className={classes.featureHeading}>
                                            MYTHS
                                        </h5>
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