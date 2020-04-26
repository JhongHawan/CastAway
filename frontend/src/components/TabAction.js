import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';
import { Typography } from '@material-ui/core';


// Props - Image, Caption, Side Text

function TabAction(props) {
    const classes = useStyles();
    return (
        <div className={classes.tabAction}>
            <Container className={classes.callToActionPadding}>
                <Row>
                    <Col md={6}>
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
                    <Col md={6}>
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
        </div>
    )
}

export default TabAction;