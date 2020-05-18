import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import { useStyles } from './Styles';
import { Col, Row } from 'react-bootstrap';
import Divider from './Divider';
import Hero from './Hero';
import HomeFeatures from './HomeFeatures';

function HomePage() {
    const classes = useStyles();

    function ReasonCard(props) {
        return (
            <Col md={4}>
                <Box style={{ textAlign: 'center' }}>
                    <img src={props.img} width="100%" />
                    <Typography variant="h4" color="secondary" style={{ paddingBottom: "0.5em" }}>
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.description}
                    </Typography>
                </Box>
            </Col>
        )
    }

    function CallToAction() {

        function SectionCard(props) {
            return (
                <Container style={{ paddingBottom: '2rem' }}>
                    <Row style={{ paddingBottom: '1rem' }}>
                        <Typography variant="h4" color="secondary">
                            {props.title}
                        </Typography>
                    </Row>
                    <Row>
                        <Typography variant="body1">
                            {props.description}
                        </Typography>
                    </Row>
                </Container>
            )
        }

        return (
            <Container>
                <Row>
                    <Col xs={12} sm={3} md={4} style={{ textAlign: 'center', marginTop: "auto", marginBottom: "auto" }}>
                        <img src="arab_girl.jpg" width="100%" />
                    </Col>
                    <Col xs={12} sm={9} md={8}>
                        <SectionCard
                            title="Stay Informed, Stay Empowered"
                            description="It is important to know what is going on in your community and ultimately your country. Staying up to date with news and policies allows for informed opinions that have more impact. Misinformation and fake news are both extremely dangerous and harmful when it comes to politics, society, and the ability for the public to make knowledgeable decisions."
                        />
                        <SectionCard
                            title="Your Voice, Your Vote"
                            description="Every citizen has both the right and responsibility to vote, get involved in their communities, and enact the change they wish to see. Voting is a basic action that allows every individual in the United States to express their personal opinion on issues they consider important to them."
                        />
                        <SectionCard
                            title="It's Your Turn To Take Action"
                            description="Individuals can also make a lot of impact by writing letters to public officials about issues that are important to them. Your congressmen all represent you, allowing you to ignite a conversation with endless possibilities. It is time to stand up and fight for what is right, and give a platform to those who haven’t had access to it in the past."
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ offset: 1, span: 10 }} style={{ textAlign: 'center' }}>
                        <Typography component="h5" variant="h5" color="primary">
                            Use our Templated Email to help contact your Representative
                        </Typography>
                    </Col>
                </Row>
            </Container>
        )
    }


    // TODO Move Why Does it Matter to new function
    return (
        <div>
            <Hero
                showCard={false}
                showCitation={true}
                sectionTitle="&quot;No one puts their children in a boat unless the water is safer than the land&quot;"
            />
            <Divider title="WHY DOES IT MATTER?" />
            <Container>
                <Row>
                    <ReasonCard
                        title="Millions Displaced"
                        description="There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18."
                        img="displaced.png"
                    />
                    <ReasonCard
                        title="Global Crisis"
                        description="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
                        img="crisis.png"
                    />
                    <ReasonCard
                        title="Immigrant Built"
                        description="Immigrants helped build our nation and make it what it is now. They are not a threat now and have not been in the past. We should do everything in our power to embrace them and not exclude them."
                        img="built.png"
                    />
                </Row>
            </Container>
            <Divider title="MAKE A DIFFERENCE" />
            <CallToAction />



            <Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
                <Button variant="contained" color="secondary" href="/yourRole" >Get Started</Button>
            </Box>
            <Divider title="WHAT IS CASTAWAY?" />
            <HomeFeatures />
        </div>
    );
}

export default HomePage;