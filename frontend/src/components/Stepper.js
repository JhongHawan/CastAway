import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Container, Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	actionsContainer: {
		marginBottom: theme.spacing(2)
	},
	resetContainer: {
		padding: theme.spacing(3)
	}
}));

function getSteps() {
	return ['INFORM YOURSELF', 'YOUR VOICE YOUR VOTE', 'CONTACT YOUR REPRESENTATIVE', 'GO THE EXTRA MILE: DONATE!'];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return (
				<Container>
					<Row>
						<Col style={{ textAlign: 'left' }}>
							<div style={{ padding: '2rem' }}>
								<Row>
									<Col sm={12} md={4} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<img src="inform.png" width="100%" />
									</Col>
									<Col sm={12} md={{ span: 7, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<Typography variant="body1">
											In our digital era it’s easy to be swayed by information
											that is often biased, or misinformed. This then continues
											to perpetuate and spread misinformation. The cycle of misinformation
											is dangerous to the lives and livelihoods of many different groups.
											Refugees seeking refuge within the United States are denied entry
											due to government policies. The common misconception is that refugees
											pose security risks and overuse government resources. Leading to
											prejudice and policies that continue to deny refugees.
										</Typography>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			);
		case 1:
			return (
				<Container>
					<Row>
						<Col style={{ textAlign: 'left' }}>
							<div style={{ padding: '2rem' }}>
								<Row>
									<Col sm={12} md={4} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<img src="vote.png" width="100%" />
									</Col>
									<Col sm={12} md={{ span: 7, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<Typography variant="body1">
											Informed voters are the best voters. Now more than ever does
											America need informed voters. Voting is an important civic
											duty that every eligible American citizen needs to do.
											Voting at the local, state and federal level tells your
											officials your opinions on important issues.
										</Typography>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			);
		case 2:
			return (
				<Container>
					<Row>
						<Col style={{ textAlign: 'left' }}>
							<div style={{ padding: '2rem' }}>
								<Row>
									<Col sm={12} md={4} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<img src="contact.png" width="100%" />
									</Col>
									<Col sm={12} md={{ span: 7, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<Typography variant="body1">
											The next step in helping is reaching out to your representative
											so that you can enact the change that you wish to see. It is your
											chance to make a change. No action is too small. Staying in touch
											with your local representative is the only way to ensure that your
											opinions are known and heard. There are a variety of different ways
											to contact your representative including by letter, phone, email, and
											even on rare occasions in person. All these ways are equally as
											effective however email is the fastest and most accessible form of
											contact. When writing your message make sure to:
										</Typography>
										<br />
										<ul>
											<li>
												<Typography variant="body1">
													Put your name and address at the top of the message.
												</Typography>
											</li>
											<li>
												<Typography variant="body1">
													Humanize the message. Make it personal to YOU.
												</Typography>
											</li>
											<li>
												<Typography variant="body1">
													Keep it brief and factual but concise.
												</Typography>
											</li>
											<li>
												<Typography variant="body1">
													Disagree/agree with respect.
												</Typography>
											</li>
											<li>
												<Typography variant="body1">
													Address them correctly.
												</Typography>
											</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container >
			);
		case 3:
			return (
				<Container>
					<Row>

						<Col style={{ textAlign: 'left' }}>
							<div style={{ padding: '2rem' }}>
								<Row>
									<Col sm={12} md={4} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<img src="donate.png" width="100%" />
									</Col>
									<Col sm={12} md={{ span: 7, offset: 1 }} style={{ marginTop: "auto", marginBottom: "auto" }}>
										<Typography variant="body1">
											Bonus points for donating! While voting and contacting your
											representatives are great ways to be active in supporting
											refugees by donating to organizations that directly support
											refugees you are going the extra mile to support a family
											finding a home. After all, paper boats were never meant to
											last. Here are some international refugee organizations that
											could use your donation.
										</Typography>
									</Col>
								</Row>
								<Row>
									<Col>
										<Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
											<Button variant="contained" color="secondary" target="_blank" href="https://donate.unhcr.org/int/general-v1/~my-donation?utm_expid=.pmON8AhjT22N8kt0bns6qg.1&utm_referrer=https:%2F%2Fwww.google.com%2F#">UNHCR</Button>
										</Box>
									</Col>
									<Col>
										<Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
											<Button variant="contained" color="secondary" target="_blank" href="https://help.rescue.org/donate/syria-crisis?ms=gs_ppc_syria19_mc_191011&initialms=gs_ppc_syria19_mc_191011&gclid=Cj0KCQjw17n1BRDEARIsAFDHFewK5C7kyVGrV7Ra88BFZ5MFoNnozUrGP92DCBvfz5xQRhF_XXclUBQaAs8LEALw_wcB">International Rescue Committee</Button>
										</Box>
									</Col>
									<Col>
										<Box style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '2em' }}>
											<Button variant="contained" color="secondary" target="_blank" href="https://www.refugeesinternational.org/donate">Refugee International</Button>
										</Box>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			);
		default:
			return 'Unknown step';
	}
}

export default function VerticalLinearStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>
							<Typography variant="h4" color="secondary">
								{label}
							</Typography>
						</StepLabel>
						<StepContent>
							<Typography>{getStepContent(index)}</Typography>
							<div className={classes.actionsContainer}>
								<div>
									<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} className={classes.button}>
						Reset
					</Button>
				</Paper>
			)}
		</div>
	);
}