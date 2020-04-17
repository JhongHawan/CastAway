import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStyles } from './Styles';


// Props
// sectionTitle - Text for section Title
// cardTitle -Heading for the div
// cardSubtitle - Subtitle for the div
// cardBody - Body for the div
function Hero(props) {
    const classes = useStyles();

    return (

        <div className={classes.heroImg}>
            <Container diableGutters>
                {/* <Row>
                    <img src="left-quote.svg" />
                </Row> */}
                <Row className="h-100">
                    <Col style={{ marginTop: "auto", marginBottom: "auto" }}>

                        <h2 className={classes.homeSectionTitle}>
                            {props.sectionTitle}
                        </h2>
                    </ Col>
                </Row>
                {/* <Row style={{ float: 'right' }}>
                    <img src="left-quote.svg" style={{ transform: 'scaleX(-1)' }} />
                </Row> */}
            </Container>
            <Container className={classes.heroChild} style={{ display: 'block', overflow: 'auto' }}>
                <Row>
                    <Col>
                        <h3>
                            {props.cardTitle}
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>
                            {props.cardSubtitle}
                        </h6>
                        <p>
                            {props.cardBody}
                        </p>
                    </Col>

                </Row>

            </Container>
        </div>

    );
}

export default Hero;