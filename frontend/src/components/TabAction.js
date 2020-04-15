import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useStyles } from './Theme';
import { useStyles } from './Styles';



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
                                <h6 className={classes.featureSubheading}>
                                    {props.caption}
                                </h6>
                            </Row>
                        </Col>
                    </Col>
                    <Col md={6}>
                        <Col>
                            <Row>
                                <p>
                                    {props.description}
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    Read More
                                </p>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TabAction;