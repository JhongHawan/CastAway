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
import CardActionArea from '@material-ui/core/CardActionArea';
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
		const [ localActive, setLocalActive ] = useState(false);

		return (
			<CardActionArea
				onClick={() => {
					setLocalActive(!localActive);
				}}
			>
				<Paper
					variant="outlined"
					className={`${classes.paper}`}
					style={{
						borderColor: localActive || props.active ? props.redGreen : '#c4c4c4',
						borderWidth: localActive || props.active ? '3px' : '1px'
					}}
				>
					{props.caption}
				</Paper>
			</CardActionArea>
		);
	}

	function CardWrapper() {
		const green = '#72BF7A';
		const red = '#F79C99';

		const [ active, setActive ] = useState(false);

		function handleDebunk() {
			setActive(true);
			console.log('After click: ' + active);
		}

		function handleReset() {
			setActive(false);
			console.log('After click: ' + active);
		}

		return (
			<Container>
				<Container style={{ textAlign: 'center' }}>
					<Button style={{ margin: '2em' }} variant="contained" color="secondary" onClick={handleDebunk}>
						Reveal all Answers
					</Button>
					<Button style={{ margin: '2em' }} variant="contained" onClick={handleReset}>
						Reset
					</Button>
				</Container>
				<Grid container spacing={2}>
					<Grid item xs={6} sm={3}>
						<Card
							caption="Immigrants and refugees are the same type of person."
							active={active}
							redGreen={red}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="Refugees go through a 20 step vetting process."
							active={active}
							redGreen={green}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="The United States is the only country that takes refugees."
							active={active}
							redGreen={red}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="Refugees are forced to leave their home to escape violence."
							active={active}
							redGreen={green}
						/>
					</Grid>

					<Grid item xs={6} sm={3}>
						<Card caption="It will be easier to send help back home." active={active} redGreen={red} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="Refugees contribute their talent, skills, and culture."
							active={active}
							redGreen={green}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="Refugees do not pay taxes, and negatively impact the economy."
							active={active}
							redGreen={red}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="The refugee crisis has appeared in history before."
							active={active}
							redGreen={green}
						/>
					</Grid>

					<Grid item xs={6} sm={3}>
						<Card caption="All the refugees that come are adult men." active={active} redGreen={red} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="Refugees come from countries all over the world."
							active={active}
							redGreen={green}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card
							caption="All refugees are terrorists with a violent agenda."
							active={active}
							redGreen={red}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Card caption="The refugee crisis is still happening." active={active} redGreen={green} />
					</Grid>
				</Grid>
				<Row />
			</Container>
		);
	}

	function ContextCard(props) {
		return (
			<ExpansionPanel style={{ background: '#F2F2F2', minHeight: '300px', maxHeight: '100%' }}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Container>
						<Row>
							<Typography component="h5" variant="h5" color="primary" className={classes.factTitle}>
								{props.mythTitle}
							</Typography>
							{/* <h4 style={{ paddingBottom: '0.5em' }}>{props.mythTitle}</h4> */}
						</Row>
						<Row>
							{}
							{/* <Typography style={{ background: "#FF6464", opacity: "0.5" }} component='overline' variant='overline'>
					{props.trueFalse}
					</Typography> */}

							{props.trueFalse}
							{/* <span style={{ background: "#FF6464", opacity: "0.7" }}>Confrimed FALSE</span> */}
							<Typography component="body1" variant="body1" className={classes.factDetail}>
								<strong>Fact Check:</strong>
								{props.mythSummary}
							</Typography>
							{/* <p style={{ paddingTop: '1em' }}><strong>Fact Check:</strong>{props.mythSummary}</p> */}
						</Row>
					</Container>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography component="body1" variant="body1">
						{props.mythDetails}
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	}

	// TODO Convert to Typography
	function isTrue() {
		return (
			<Box style={{ backgroundColor: '#72BF7A', borderRadius: '10px', padding: '5px' }}>
				<Typography component="overline" variant="overline" style={{ fontWeight: '700', color: 'white' }}>
					CONFIRMED TRUE
				</Typography>
			</Box>
		);
	}

	function isFalse() {
		return (
			<Box style={{ backgroundColor: '#F79C99', borderRadius: '10px', padding: '5px' }}>
				<Typography component="overline" variant="overline" style={{ fontWeight: '700', color: 'white' }}>
					CONFIRMED FALSE
				</Typography>
			</Box>
		);
	}

	function FactCheckFalse() {
		return (
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isFalse()}
							mythTitle="Immigrants and refugees are the same type of person."
							mythSummary="This statement is false, and is a dangerous yet common assumption."
							mythDetails="Although very similar refugees and immigrants are very different kinds of people. A refugee is someone who has been forced to leave their country in order to escape war, prosecution, or natural disaster. They fear persecution because of their race, religion, nationality, or political opinion. On the other hand, an immigrant is An immigrant is someone who makes a conscious decision to leave his or her home and move to a foreign country with the intention of settling there."
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isFalse()}
							mythTitle="All refugees are terrorists with a violent agenda."
							mythSummary=" Refugees are fleeing from violence and terrorism, they are the victims of this kind of oppression back home."
							mythDetails="When they flee to a host country they do so to find peace and to start new lives. Their lives are being threatened every day, that is why they are running away. This statement is ironic, and a hurtful generalization that often costs real people and families their lives. The extensive vetting process that the refugees go through makes sure to eliminate any viable threat of terrorism or violence. This process has been very successful so far, of the roughly three million refugees admitted since 1980, not one refugee has ever killed a single American in a terrorist attack."
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isFalse()}
							mythTitle="The United States is the only country that takes refugees."
							mythSummary=" In terms of Arab refugees, Muslim countries are taking the most burden of the refugee crisis."
							mythDetails="There are 24 countries worldwide that take in refugees. However, it is undeniable that the US is more politically and economically stable than any of the Arab countries combined. Oppression exists in other Arab countries, the same oppression that forced refugees to leave their own countries in the first place. Additionally, several countries in Europe have welcomed refugees to the best of their ability. In 2019 Europe accepted 123, 920 refugees and have taken even more in past years. However, it is undeniable that the US has more means and resources to take in refugees, and if possible should continue to help to the best of their ability. "
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isFalse()}
							mythTitle="It will be easier to send help back home."
							mythSummary=" This kind of help already exists. However, it is simply not enough."
							mythDetails="Organizations like Catholic Relief Services (CRS), UNHCR, and the International Rescue Committee have provided help for countries like Greece, Jordan, Lebanon, Syria, and Iraq. This help includes food, shelter, education, and medical care. This is not enough. The level of oppression and violence that these refugees are experiencing goes beyond resources and virtual support. These people need to leave these countries and resettle so that they and their family members are not injured, imprisoned, or killed.  "
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isFalse()}
							mythTitle="All the refugees that come are adult men."
							mythSummary=" In 2018, a total of 11,099 female refugees, and 11,306 male refugees arrived in the United States."
							mythDetails="Of the male refugees that arrived 5,448 were children, and of the female refugees 5,115 were children. Families never want to split up, that is never the first choice. However, if one family member is able to enter the US they will come and do what they can to bring the rest of their family to safety. These people are beyond desperate they are doing whatever they can for their freedom and for the security of their family. "
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isFalse()}
							mythTitle="Refugees do not pay taxes, and negatively impact the economy."
							mythSummary=" Like any other United States citizen refugees are required to pay the same employment, property, sales, and other taxes."
							mythDetails="The US does not provide refugees with money when they arrive. They are required to work for their income and pay taxes. However, there are some benefits available for emergency situations both medical and financial. In order to receive these benefits refugees must apply and be accepted and they must meet the minimum income and resource  requirements to qualify. On the other hand, they are not allowed to vote. "
						/>
					</Grid>
				</Grid>
			</Container>
		);
	}

	function FactCheckTrue() {
		return (
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isTrue()}
							mythTitle="Refugees are forced to leave their homes to escape violence."
							mythSummary=" This is true and it is actually the definition of a refugee."
							mythDetails="By definition a refugee is “someone who has been forced to leave their country in order to escape war, prosecution, or natural disaster. They fear persecution because of their race, religion, nationality, or political opinion”. No one will voluntarily leave their homes, their jobs, their family, or their people unless it was absolutely necessary, not unless their life depended on it.  Refugees often flee their home countries when there is a war going on because their country becomes unsafe for them to live in, and their only choice is to run."
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isTrue()}
							mythTitle="Refugees come from countries all over the world."
							mythSummary=" Although there is a large number of arab refugees, refugees come from all other the world."
							mythDetails=""
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isTrue()}
							mythTitle="Refugees go through a 20 step vetting process."
							mythSummary=" This statement is entirely true. In fact refugees are the most vetted people in the world."
							mythDetails=" There is an extensive vetting process that usually takes up to two years. This process consists of an average of 18-20  different steps that refugees must go through to come into the US. Departments that are involved in this process include the FBI, Department of Homeland Security, the National Counterterrorism Center, and much more. Certain refugees like Syrians have a longer and more extensive process, and are the most vetted refugees in the world. Learn more about the details of the vetting process here. "
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isTrue()}
							mythTitle="Refugees contribute their talent, skills, and culture."
							mythSummary=" Refugees come to their host countries to live a complete and fulfilled life. They do what they can to contribute."
							mythDetails="Refugees and immigrants alike contribute to society in a variety of different manners. In fact, history documents that some of the most significant contributions to the US come from refugees and immigrants. They share their talents, skills, cultures, and customs. These contributions include clothing, food, music, and entertainment. "
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isTrue()}
							mythTitle="The refugee crisis is still happening."
							mythSummary=" This statement is completely true. There is still refugee crisis going on in the world and it needs more attention."
							mythDetails="When thinking about the refugee crisis we want to find a way to solve it, end it for good. Unfortunately this is not possible. Refugees flee their homes because threats on their life or their safety. Therefore, as long as wars continue people will continue to flee them. "
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ContextCard
							trueFalse={isTrue()}
							mythTitle="The refugee crisis has appeared in history before."
							mythSummary=" There has been many refugee crisis' over history. As long as there is war there will be refugees."
							mythDetails="The refugee crisis has appeared in history before. For example, The persecution of Jews and other minorities during World War II and the Holocaust created a refugee crisis very similar to the one going on currently around the world. The current conflict in Syria has displaced around 12 million refugees from their homes, which was the largest wave of refugees since World War II. In the last half century, events around the world have pushed even larger numbers of people to flee war and persecution, thus becoming refugees. "
						/>
					</Grid>
				</Grid>
			</Container>
		);
	}

	return (
		<div>
			<Box>
				<Hero
					sectionTitle="Myths"
					cardTitle="Title"
					cardSubtitle="Subtitle"
					cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
				/>
				<Divider title="MYTH DEBUNK" />
				<Container className={classes.callToAction}>
					<Container>
						<Typography component="h6" variant="h6">
							Can you tell the difference between a myth and a fact?
						</Typography>
						<Typography component="body1" variant="body1">
							Below is a list of refugee myths and facts. Find out which statement is true and which
							statement is false by clicking the "Reveal All Answers" button or by clicking each
							individual statement. If there is a{' '}
							<span style={{ color: 'green', fontWeight: '700' }}>GREEN</span> border around the box then
							that statement is a fact, but if there is a{' '}
							<span style={{ color: 'red', fontWeight: '700' }}>RED</span> border then that statement is a
							myth. To reset the grid click on the reset button.{' '}
						</Typography>
					</Container>
					<CardWrapper />
				</Container>
				<Divider title="FACT CHECK" />
				<Container>
					<Typography component="h6" variant="h6">
						There are several myths that need to be debunked when it comes to refugees.
					</Typography>
					<Typography component="body1" variant="body1">
						Below is a list of common misconceptions about topics concerning refugees. There is extreme
						danger in perpetuating false information especially when the lives of inncocent people relies on
						it. To learn more, click on each myth and debunk it.
					</Typography>
				</Container>
				<Container>
					<Typography style={{ padding: '1em 0em 1em' }} component="h4" variant="h4" color="error">
						CONFIRMED FALSE
					</Typography>
				</Container>
				<FactCheckFalse />
				<Container>
					<Typography
						style={{ padding: '1em 0em 1em' }}
						component="h4"
						variant="h4"
						className={classes.testingSuccessTheme}
					>
						CONFIRMED TRUE
					</Typography>
				</Container>
				<FactCheckTrue />
			</Box>
		</div>
	);
}

export default Myths;
