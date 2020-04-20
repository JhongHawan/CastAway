import React, { useState, setState } from 'react';
import { Grid, Box, Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ReactCompareImage from 'react-compare-image';
// import ContextCard from './ContextCard';
import Hero from './Hero';
import Divider from './Divider';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useStyles } from './Styles';

import Footer from './About/Footer';


function Myths() {
  const classes = useStyles();

  /**
   * @param {String} props.color 
   */
  function Card(props) {
    let color = '#000000';
    let width = '1px'
    if (props.clicked) {
      color = props.redGreen;
      width = '3px';
    }
    // 
    // let 
    return (
      <Row>
        <Paper variant="outlined" className={classes.paper} style={{ borderColor: color, borderWidth: width, width: '300px' }}>{props.caption}</Paper>
      </Row>
    )
  }

  function CardWrapper() {

    let green = '#72BF7A';
    let red = '#F79C99';

    let [active, setActive] = useState(false);

    function handleDebunk() {
      setActive(active = true);
      console.log('After click: ' + active);
    }

    function handleReset() {
      setActive(active = false);
      console.log('After click: ' + active);
    }

    return (
      <Container>
        <Container style={{ textAlign: 'center' }}>
          <Row>
            <Col>
              <Button variant="contained" onClick={handleDebunk}>Debunk</Button>
            </Col>
            <Col>
              <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col md={3}>
            <Card caption='Immigrants and refugees are the same type of person.' clicked={active} redGreen={red} />
            <Card caption='Refugees go through a 20 step vetting process.' clicked={active} redGreen={green} />
            <Card caption='The United States is the only country that takes refugees.' clicked={active} redGreen={red} />
          </Col>
          <Col md={3}>
            <Card caption='Refugees are forced to leave their home to escape violence.' clicked={active} redGreen={green} />
            <Card caption='All refugees live in refugee camps.' clicked={active} redGreen={red} />
            <Card caption='Refugees contribute their talent, skills, and culture.' clicked={active} redGreen={green} />

          </Col>
          <Col md={3}>
            <Card caption='Refugees do not pay taxes, and negatively impact the economy.' clicked={active} redGreen={red} />
            <Card caption='The refugee crisis is not a new phenomenon in history.' clicked={active} redGreen={green} />
            <Card caption='Refugees steal jobs from US citizens.' clicked={active} redGreen={red} />
          </Col>
          <Col md={3}>
            <Card caption='Refugees come from countries all over the world.' clicked={active} redGreen={green} />
            <Card caption='All refugees are terrorists with a violent agenda.' clicked={active} redGreen={red} />
            <Card caption='The refugee crisis is still happening.' clicked={active} redGreen={green} />
          </Col>
        </Row>
      </Container>
    )
  }

  // TODO Convert to Typography
  function FactCheck() {

    function ContextCard(props) {
      return (
        <Row style={{ padding: 10 }}>
          <ExpansionPanel style={{ background: '#F2F2F2' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Container>
                <Row>
                  <Typography component='h5' variant='h5' color='primary' className={classes.factTitle}>
                    {props.mythTitle}
                  </Typography>
                  {/* <h4 style={{ paddingBottom: '0.5em' }}>{props.mythTitle}</h4> */}
                </Row>
                <Row>
                  <Typography style={{ background: "#FF6464", opacity: "0.5" }} component='overline' variant='overline'>
                    Confirmed FALSE
                  </Typography>
                  {/* <span style={{ background: "#FF6464", opacity: "0.7" }}>Confrimed FALSE</span> */}
                  <Typography component='body1' variant='body1' className={classes.factDetail}>
                    <strong>Fact Check:</strong>{props.mythSummary}
                  </Typography>
                  {/* <p style={{ paddingTop: '1em' }}><strong>Fact Check:</strong>{props.mythSummary}</p> */}
                </Row>
              </Container>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography component='body1' variant='body1'>
                {props.mythDetails}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Row>
      )
    }


    return (
      <Container >
        <Row>
          <Col md={6} lg={4}>
            <ContextCard
              mythTitle="Refugees are not vetted."
              mythSummary=" This statement is entirely false. In fact refugees are the most vetted people in the world."
              mythDetails="There is an extensive vetting process that usually takes up to two years. This process consists of an average of 18-20  different steps that refugees must go through to come into the US. Departments that are involved in this process include the FBI, Department of Homeland Security, the National Counterterrorism Center, and much more. Certain refugees like Syrians have a longer and more extensive process, and are the most vetted refugees in the world. Learn more about the details of the vetting process here."
            />

            <ContextCard
              mythTitle="All refugees are terrorists."
              mythSummary=" Refugees are fleeing from violence and terrorism, they are the victims of this kind of opression back home."
              mythDetails="When they flee to a host country they do so to find peace and to start new lives. Their lives are being threatened every day, that is why they are running away. This statement is ironic, and a hurtful generalization that often costs real people and families their lives. The extensive vetting process that the refugees go through makes sure to eliminate any viable threat of terrorism or violence. This process has been very successful so far, of the roughly three million refugees admitted since 1980, not one refugee has ever killed a single American in a terrorist attack."
            />

          </Col>
          <Col md={6} lg={4}>
            <ContextCard
              mythTitle="No other countries are taking refugees."
              mythSummary=" In terms of Arab refugees, Muslim countries are taking the most burden of the refugee crisis."
              mythDetails="However, it is undeniable that the US is more politically and economically stable than any of the Arab countries combined. Oppression exists in other Arab countries, the same oppression that forced refugees to leave their own countries in the first place. Additionally, several countries in Europe have welcomed refugees to the best of their ability. In 2019 Europe accepted 123, 920 refugees and have taken even more in past years. However, it is undeniable that the US has more means and resources to take in refugees, and if possible should continue to help to the best of their ability. "
            />

            <ContextCard
              mythTitle="Why can't we just send them help back home?"
              mythSummary=" This kind of help already exists. However, it is simply not enough."
              mythDetails="Organizations like Catholic Relief Services (CRS), UNHCR, and the International Rescue Committee have provided help for countries like Greece, Jordan, Lebanon, Syria, and Iraq. This help includes food, shelter, education, and medical care. This is not enough. The level of oppression and violence that these refugees are experiencing goes beyond resources and virtual support. These people need to leave these countries and resettle so that they and their family members are not injured, imprisoned, or killed.  "
            />

          </Col>
          <Col md={6} lg={4}>
            <ContextCard
              mythTitle="All the refugees that come are adult men."
              mythSummary=" In 2018, a total of 11,099 female refugees, and 11,306 male refugees arrived in the United States."
              mythDetails="Of the male refugees that arrived 5,448 were children, and of the female refugees 5,115 were children. Families never want to split up, that is never the first choice. However, if one family member is able to enter the US they will come and do what they can to bring the rest of their family to safety. These people are beyond desperate they are doing whatever they can for their freedom and for the security of their family. "
            />

            <ContextCard
              mythTitle="The refugee crisis is over."
              mythSummary=" This statement is simply false. There is still refugee crisis going on in thie world and it needs more attention."
              mythDetails="When thinking about the refugee crisis we want to find a way to solve it, end it for good. Unfortunately this is not possible. Refugees flee their homes because threats on their life or their safety. Therefore, as long as wars continue people will continue to flee them. "
            />
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>
      <Box>
        <Hero
          sectionTitle=
          "Myths"
          cardTitle="Title"
          cardSubtitle="Subtitle"
          cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
        />
        <Box className={classes.homeTopSpace}>
          <Divider title="MYTH DEBUNK" />
          <Container className={classes.callToAction}>
            <Container>
              <h5>There are several myths that need to be debunked when it comes to refugees.</h5>
              <p>Below is a list of common misconceptions about topics concerning refugees.
                There is extreme danger in perpetuating false information especially when the lives of inncocent people relies on it. To learn more, click on each myth and debunk it.</p>
            </Container>

            <CardWrapper />
          </Container>
        </Box>
        <Box className={classes.homeSectionSpace}>
          <Divider title="FACT CHECK" />
          <Box className={classes.callToAction}>
            <Container>
              <h5>There are several myths that need to be debunked when it comes to refugees.</h5>
              <p>Below is a list of common misconceptions about topics concerning refugees.
                There is extreme danger in perpetuating false information especially when the lives of inncocent people relies on it. To learn more, click on each myth and debunk it.</p>
            </Container>
            <FactCheck />
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Myths; 
