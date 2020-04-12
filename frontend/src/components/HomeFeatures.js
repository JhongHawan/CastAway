import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
// import { Grid } from '@material-ui/core';
import { useStyles } from './Theme';


function HomeFeatures() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <Col>
                            <Row>
                                Data Visualization
                        </Row>
                            <Row>
                                Subtitle
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
                                        Stories
                                </Row>
                                    <Row>
                                        <img src="https://via.placeholder.com/100x100.png?text=TEMP" />
                                    </Row>
                                    <Row>
                                        <p>
                                            Subtitle
                                    </p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        Myths
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