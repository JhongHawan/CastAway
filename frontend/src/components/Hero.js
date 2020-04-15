import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStyles } from './Styles';


function Hero() {
    const classes = useStyles();
    
    return(
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
            {/* <Container className={classes.heroText}>
                <Row>
                    <Col>
                        <img src="left-quote.svg" />
                    </ Col>
                    <Col sm="auto" md={5} className={classes.homeSectionTitle}>
                        No one puts their children in a boat unless the water is safer than the land    
                    </ Col>
                    <Col>
                        <img src="left-quote.svg" 
                        style={{
                            transform: 'scaleX(-1)'
                        }} />
                    </ Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default Hero;