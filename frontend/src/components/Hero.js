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
    )
}


/**
  * @param {String} props.sectionTitle - displays sectionTitle
  * @param {Boolean} props.showCard - has a div floating or not
  * 
  * TODO - remove className homeSectionTitle after fixing custom Theming
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
                            className={classes.homeSectionTitle}
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
                    card={props.cardSubtitle}
                    cardBody={props.cardBody}
                /> : null
            }


        </div>

    );
}

export default Hero;