import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStyles } from './Styles';
import { Typography } from '@material-ui/core';


/**
  * @param {String} props.cardTitle - Title for the card
  * @param {String} props.cardSubtitle - Subtitle
  * @param {String} props.cardBody - Body
  */
function HeroCard(props) {
    const classes = useStyles();

    return (
        <Container className={classes.heroChild} style={{ display: 'block', overflow: 'auto' }}>
            <Row>
                <Col>
                    <Typography component="h4" variant="h4" color="primary">
                        {props.cardTitle}
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Typography component="subtitle1" variant="subtitle1">
                                {props.cardSubtitle}
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography component="body1" variant="body1">
                                {props.cardBody}
                            </Typography>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


/**
  * @param {String} props.sectionTitle - displays sectionTitle
  * @param {Boolean} props.showCard - has a div floating or not
  * 
  * TODO - remove homeSectionTitle
  */
function Hero(props) {
    const classes = useStyles();

    const [includeCard] = React.useState(props.showCard);

    return (

        <div className={classes.heroImg}>
            <Container diableGutters>
                <Row className="h-100">
                    <Col style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <Typography
                            component="h1"
                            variant="h1"
                            align="center"
                            color="primary"
                        // className={classes.homeSectionTitle}
                        >
                            {props.sectionTitle}
                        </Typography>
                        {/* <h1 className={classes.homeSectionTitle}>
                            {props.sectionTitle}
                        </h1> */}
                    </ Col>
                </Row>
            </Container>


            {/*hide or not to hide */}

            {includeCard ?
                <HeroCard
                    cardTitle={props.cardTitle}
                    cardSubtitle={props.cardSubtitle}
                    cardBody={props.cardBody}
                /> : null
            }


        </div>

    );
}

export default Hero;