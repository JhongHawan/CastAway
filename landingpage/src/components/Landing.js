import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Box, Paper, Link } from '@material-ui/core';

import hero from '../img/landing.jpeg';
import InfoIcon from '@material-ui/icons/Info';


// reminder theme.spacing(top, sides, bottom)
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    heroImg: {
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(5, 5, 5),
        textAlign: 'center'
        // opacity: '85%'
    },
    valueSection: {
        backgroundColor: '#002851',
        '& h3': {
            padding: theme.spacing(3, 0, 0)
        }
        // height: '40vh',
    },
    blackPadding: {
        padding: theme.spacing(3, 3, 0),
        '& img': {
            padding: theme.spacing(1, 0, 1)
        }
    },
    matterSection: {
        padding: theme.spacing(5, 5, 5)
    },
    solutionSection: {
        padding: theme.spacing(5, 5, 5),
        '& h3': {
            padding: theme.spacing(0, 0, 5)
        }

    },
    paperRoot: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(5, 0, 5),
        textAlign: 'center',

    },
    paper: {
        padding: theme.spacing(3),
        height: '250px',
        // maxHeight: '250px',
        // height: 'inherit',
        '& h5': {
            padding: theme.spacing(2, 1, 2)
        }
    },
    imgShadow: {
        boxShadow:
            '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
    },
    teamItem: {
        padding: theme.spacing(10, 7, 10)
    }
}));

export default function Landing() {
    const classes = useStyles();



    return (
        <React.Fragment>
            {/* Black Section */}
            <Container className={classes.heroImg} maxWidth={false}>

                {/* Title */}
                <Grid container justify="center" spacing={1} style={{ textAlign: 'center' }} className={classes.blackPadding}>
                    <Grid item>
                        <Box>
                            <img src="logo.png" alt="paper boat castaway logo" width="20%" />
                            <Typography variant="h3" style={{ color: 'white' }}>
                                CASTAWAY
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Announcing Open Source */}
                <Grid container direction="row" justify="center" alignItems="center" className={classes.blackPadding}>
                    <Grid item>
                        <Typography variant="h5" color="secondary" >
                            AN OPEN SOURCE PROJECT STARTING MAY 22, 2020
                        </Typography>
                    </Grid>
                </Grid>

                {/* Main Slogan? */}
                <Grid container direction="row" justify="center" alignItems="center" className={classes.blackPadding}>
                    <Grid item>
                        <Typography variant="h3" style={{ color: 'white' }} >
                            {/* An Experience Built to Raise Awareness For Refugees */}
                            DELIVERING ACCURATE AND RELIABLE INFORMATION FOR REFUGEE AWARENESS
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* WHY IT MATTERS */}
            <Container maxWidth={false} className={classes.matterSection}>
                <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={4} align="center">
                        <img src="crisis.png" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography variant="h3" color="secondary">
                            WHY DOES IT MATTER?
                        </Typography>
                        <Typography variant="body1">
                            There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.
                            Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Three Values */}
            <Container maxWidth={false} className={classes.valueSection}>
                <Typography variant="h3" style={{ color: 'white', textAlign: 'center' }}>
                    WHAT CASTAWAY CAN DO FOR YOU
                </Typography>
                <Grid container direction="row" justify="center" alignItems="center" spacing={5} className={classes.paperRoot}>
                    <Grid item sm={12} md={4}>
                        <Paper variant="elevation" elevation={20} className={classes.paper}>
                            <InfoIcon color="secondary" style={{ fontSize: 75 }} />
                            <Typography variant="h5">
                                Key Background Information
                            </Typography>
                            <Typography variant="body1">
                                Context is one of the key points of our solution because it provides essential
                                background information.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Paper variant="elevation" elevation={20} className={classes.paper} >
                            <InfoIcon color="secondary" style={{ fontSize: 75 }} />
                            <Typography variant="h5">
                                Concrete Data Visualization
                            </Typography>
                            <Typography variant="body1">
                                Data and statistics are important when talking about global issues. People want to see the numbers.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Paper variant="elevation" elevation={20} className={classes.paper} >
                            <InfoIcon color="secondary" style={{ fontSize: 75 }} />
                            <Typography variant="h5">
                                Personable and Powerful Stories
                            </Typography>
                            <Typography variant="body1">
                                Refugees are people. They have names, faces and like everyone else they have a story.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>


            {/* Solution Screenshots */}
            <Container maxWidth={false} className={classes.solutionSection}>
                <Typography variant="h3" color="secondary" style={{ textAlign: 'center' }}>
                    OUR FEATURES
                </Typography>


                <Grid container justify="center" alignItems="center" spacing={10}>

                    <Grid item xs={12} sm={5} align="center">
                        <img src="history_page.jpg" width="100%" className={classes.imgShadow} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" color="primary">HISTORY</Typography>
                        <Typography variant="body1">
                            In an effort to build a holistic and independent site addressing the issue of
                            refugee misinformation, Castaway doesn’t assume that the user has any background
                            information on the topic. History is an important feature because it educates the
                            user and gives them background information essential to their understanding of
                            refugees and their past.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={5} align="center">
                        <img src="myth_page.jpg" width="100%" className={classes.imgShadow} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" color="primary">MYTHS</Typography>
                        <Typography variant="body1">
                            One of the most important features on our site is the Myth page. The myth page
                            allows us to address the common misconceptions about refugees and explain why
                            they are false and extremely harmful to spread. Additionally, this page also
                            addresses and explains the less known facts about refugees that are often overlooked.
                            The interactivity in the page allows the user to click on different myths and facts
                            and “debunk” them.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={5} align="center">
                        <img src="stories_page.jpg" width="100%" className={classes.imgShadow} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" color="primary">STORIES</Typography>
                        <Typography variant="body1">
                            Stories give this cause a face. It is easy to look at statistics and read facts all day,
                            but behind these numbers are people who are fighting for their lives and for the lives
                            of their loved ones. At the end of the day they are the ones that are being impacted
                            by the policies and quotas. They are somebody's mother, brother, aunt, grandmother,
                            or child. They deserve justice and for their stories to be heard. Our stories section
                            also has the goal of humanizing the crisis and possibly making it more personable.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={5} align="center">
                        <img src="data_page.jpg" width="100%" className={classes.imgShadow} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" color="primary">DATA</Typography>
                        <Typography variant="body1">
                            Another one of our key features is data. Using an API our site provides users with statistics
                            about the influx of refugees from different countries, to different host countries, in
                            different years. Providing factual unbiased data to people allows them to form their own
                            opinions while having the tools to back them up. The numbers speak to lengths that words cannot.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={5} align="center">
                        <img src="vetting_page.jpg" width="100%" className={classes.imgShadow} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" color="primary">VETTING PROCESS</Typography>
                        <Typography variant="body1">
                            One of the most common misconceptions about refugees is that they are not vetted and that by allowing
                            refugees into our country we are allowing terrorists and criminals in. This however couldn’t be
                            further from the truth. Refugees, specifically Syrian refugees, are the most vetted individuals
                            in the world. Although it varies from case to case, refugees go through a 20 step vetting process
                            that spans 2 years. Our site allows the user to click through every step and learn the details to
                            shed light on the complexity of the process.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={5} align="center">
                        <img src="email_template_page.jpg" width="100%" className={classes.imgShadow} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" color="primary">TEMPLATED EMAIL</Typography>
                        <Typography variant="body1">
                            Our site has a call to action urging the users to get involved in any way they can. One way that can
                            truly make a difference is if after they have formed an informed opinion they contact their representatives
                            about their opinions and concerns. The process can be confusing and hard to follow so our site helps users
                            understand how to write their representative an effective email, where to find their information, and gives
                            them a template to help get them started. By completing the research for the user we hope that they would be
                            more willing to reach out and begin to make a difference.
                        </Typography>
                    </Grid>

                </Grid>

            </Container>



            {/* MEET THE TEAM */}
            <Container maxWidth={false} className={classes.valueSection}>
                <Typography variant="h3" style={{ color: 'white', textAlign: 'center' }}>
                    MEET THE TEAM
                </Typography>
                <Grid container spacing={3} className={classes.teamItem}>
                    <Grid item sm={12} sm={6} md={3} >
                        <img src="brian.jpg" width="100%" title="Brian Jhong" />
                        <Typography variant="h6" style={{ color: 'white' }}>Brian Jhong</Typography>
                        <Typography variant="body1" style={{ color: 'white' }}>Full-Stack Developer</Typography>
                        <Link href="mailto:jhongb@uw.edu" underline="none">
                            <Typography variant="body2" color="secondary">
                                jhongb@uw.edu
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item sm={12} sm={6} md={3} style={{}}>
                        <img src="angela.png" width="100%" title="Angela Shen" />
                        <Typography variant="h6" style={{ color: 'white' }}>Angela Shen</Typography>
                        <Typography variant="body1" style={{ color: 'white' }}>UX Designer</Typography>
                        <Link href="mailto:angelashen0607@gmail.com" underline="none">
                            <Typography variant="body2" color="secondary">
                                angelashen0607@gmail.com
                            </Typography>
                        </Link>
                        {/* angelashen0607@gmail.com */}

                    </Grid>
                    <Grid item sm={12} sm={6} md={3}>
                        <img src="rahma.jpg" width="100%" title="Rahma Kamel" />
                        <Typography variant="h6" style={{ color: 'white' }}>Rahma Kamel</Typography>
                        <Typography variant="body1" style={{ color: 'white' }}>Project Manager/Developer</Typography>
                        <Link href="mailto:kamelr@uw.edu" underline="none">
                            <Typography variant="body2" color="secondary">
                                kamelr@uw.edu
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item sm={12} sm={6} md={3}>
                        <img src="tracy.jpg" width="100%" title="Tracy Huynh" />
                        <Typography variant="h6" style={{ color: 'white' }}>Tracy Huynh</Typography>
                        <Typography variant="body1" style={{ color: 'white' }}>Project Manager/Developer</Typography>
                        <Link href="mailto:thuynh12@uw.edu" underline="none">
                            <Typography variant="body2" color="secondary">
                                thuynh12@uw.edu
                            </Typography>
                        </Link>
                    </Grid>


                    <Grid item xs={12} align="center">
                        <Typography variant="subtitle1" align="center" style={{ color: 'white' }}>
                            This project is a part of the
                            <Link href="https://ischool.uw.edu/capstone" underline="none">
                                <Typography variant="subtitle1" color="secondary">
                                    Capstone Project
                                </Typography>
                            </Link>
                        course at the University of Washington Information School
                        </Typography>


                        {/* // TODO add github icon linking to repo */}
                        {/* <Typography variant="body1" style={{ color: 'white' }}>
                            Access our repository : 
                        </Typography> */}

                    </Grid>

                </Grid>

            </Container>
        </React.Fragment>
    );
}