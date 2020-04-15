import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStyles } from './Theme';


function Hero() {
    const classes = useStyles();

    return (
        <React.Fragment>

        <div className={classes.heroImg}>
            <Container diableGutters>
                {/* <Row>
                    <img src="left-quote.svg" />
                </Row> */}
                <Row className="h-100">
                    <Col style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <h2 className={classes.homeSectionTitle}>
                            "No one puts their children in a boat unless the water is safer than the land"
                        </h2>
                    </ Col>
                </Row>
                {/* <Row style={{ float: 'right' }}>
                    <img src="left-quote.svg" style={{ transform: 'scaleX(-1)' }} />
                </Row> */}
            </Container>
            <Container className={classes.heroChild} style={{display: 'block', overflow: 'auto'}}>
                <Row>
                    <Col>
                        <h3>
                            WHY DOES IT MATTER?
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Subtitle</h6>
                        <p>The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.</p>
                    </Col>

                </Row>

            </Container>
        </div>
        </React.Fragment>

    );
}

export default Hero;