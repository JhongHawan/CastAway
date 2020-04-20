import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';
import { Typography, Link } from '@material-ui/core';


// Props - Image, Caption, Side Text

function TabAction(props) {
    const classes = useStyles();
    return (
        <div className={classes.tabAction}>
            <Container className={classes.callToActionPadding}>
                <Row>
                    <Col>
                        <Col>
                        <Typography component="h4" variant="h4" color="secondary" className={classes.featureSubheading}>
                            {props.caption}
                        </Typography>
                    
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Col>
                            <Row>
                                <Col>
                                    <img src={props.img} width="250px" style={{ filter: 'grayscale(100%)' }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {/* <Typography component="h5" variant="h5" color="primary" className={classes.featureSubheading}>
                                        {props.caption}
                                    </Typography> */}
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col md={7}>
                        <Col>
                            <Row>
                                <Typography component="body1" variant="body1">
                                    {props.description}
                                </Typography>
                            </Row>
                            <Row>
                                <Typography component="overline" variant="overline" color="secondary" className={classes.featureSubheading}>
                                    Read More
                                    
                                </Typography>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TabAction;