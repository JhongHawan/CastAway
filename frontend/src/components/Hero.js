import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStyles } from './Theme';


function Hero() {
    const classes = useStyles();

    return (
            <div className={classes.heroImg}>
                <Container>
                    <Row>
                        <img src="left-quote.svg" />
                    </Row>
                    <Row>
                        <Col className={classes.heroText, classes.homeSectionTitle}>
                            No one puts their children in a boat unless the water is safer than the land
                    </ Col>
                    </Row>
                    <Row>
                        <img src="left-quote.svg" />
                    </Row>
                </Container>
                <div className={classes.heroChild}>
                    <p>Hello, I'm working just not pretty</p>
                </div>
            </div>
    );
}

export default Hero;