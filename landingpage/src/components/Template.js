import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import Landing from '../img/landing.jpeg';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(8, 0, 6),
    padding: theme.spacing(3, 5, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 5, 5),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#C9D6DF',
    padding: theme.spacing(6),
  },
  landingCard: {
    position: 'relative'
  },
  landingImg: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30',
    opacity: '80%',
    position: 'relative',
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover'
  },
  textOverlay: {
    position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    color: '#F16841',
    left: '0',
    top: '33%',
    width: '100%',
    textAlign: 'center'
  },
  heroImg: {
    // backgroundImage: `url(${Landing})`,
    // backgroundPosition: '50%',
    // backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundSize: 'cover',
    opacity: '80%',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${Landing})`,
      height: '400px'
    },
    [theme.breakpoints.up('sm')]: {
      backgroundImage: `url(${Landing})`,
      height: '400px'
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${Landing})`,
      height: '640px'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${Landing})`,
      height: '853px'
    },
    [theme.breakpoints.up('xl')]: {
      backgroundImage: `url(${Landing})`,
      height: '1280px'
    },
  },
  specialBox: {
    boxShadow:
      '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',

  }

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Box className={classes.heroImg}>
          <Box className={classes.textOverlay}>
            <Typography variant="h2">Holistic, Accurate & Trustworthy</Typography>
          </Box>
        </Box>
        {/* older hero image */}
        {/* <Card className={classes.landingCard}>
          <CardMedia className={classes.landingImg} image={'landing.jpeg'} />
          <div className={classes.textOverlay}>
            <Typography variant="h2">Make An Impact</Typography>
          </div>
        </Card> */}

        {/* Purpose Section */}
        <Container className={classes.mainContent}>
          <Grid container justify="center" alignItems="center" className={classes.mainContent} spacing={3}>
            <Grid item xs={12} sm={3} align="center">
              <img src="question.jpg" width="150px" />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h5">Why does it matter?</Typography>
              <Typography variant="body2">
                There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.
                Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.
            </Typography>
            </Grid>
          </Grid>
        </Container>


        {/* Solution section */}
        <Container>
          <Box align="center" className={classes.mainContent}>
            <Typography variant="h3">Our Solution</Typography>
          </Box>
          <Grid container justify="center" alignItems="center" className={classes.mainContent} spacing={10}>
            <Grid item xs={12} sm={5} align="center">
              <img className={classes.specialBox} src="https://via.placeholder.com/250x167.png?text=TEMP" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Example #1</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} align="center">
              <img className={classes.specialBox} src="https://via.placeholder.com/250x167.png?text=TEMP" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Example #2</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} align="center">
              <img className={classes.specialBox} src="https://via.placeholder.com/250x167.png?text=TEMP" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Example #3</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </Grid>
          </Grid>
        </Container>


        <Container>
          <Box align="center" className={classes.mainContent}>
            <Typography variant="h3">Meet the Team</Typography>
          </Box>
          <Grid container justify="center" alignItems="center" className={classes.mainContent} spacing={4}>
            <Grid item xs={12} sm={3} align="center">
              <img src="brian.jpg" width="150px" />
              <Typography variant="h6">Brian Jhong</Typography>
              <Typography variant="body1">Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={3} align="center">
              <img src="angela.png" width="150px" />
              <Typography variant="h6">Angela Shen</Typography>
              <Typography variant="body1">UX Designer</Typography>
            </Grid>
            <Grid item xs={12} sm={3} align="center">
              <img src="rahma.jpg" width="150px" />
              <Typography variant="h6">Rahma Kamel</Typography>
              <Typography variant="body1">Data Scientist/UX Designer</Typography>
            </Grid>
            <Grid item xs={12} sm={3} align="center">
              <img src="tracy.jpeg" width="150px" />
              <Typography variant="h6">Tracy Huynh</Typography>
              <Typography variant="body1">Project Manager</Typography>
            </Grid>
          </Grid>
        </Container>
        {/* <Container className={classes.heroContent}>
          <Box className={classes.heroContent}>
            <Typography variant="h2" align="center">Purpose</Typography>
          </Box>
          <Box className={classes.heroContent}>
            <Typography variant="body1">
              There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.
              Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.
            </Typography>
          </Box>
        </Container> */}

        {/* Container for screenshots of the solution */}
        {/* <Container className={classes.heroContent}>
          <Box className={classes.heroContent}>
            <Typography variant="h2" align="center">Our Solution</Typography>
          </Box>
          <Grid container justify={'center'} spacing={10} className={classes.cardGrid}>
            <Grid item justify={'center'}>
              <CardMedia>
                <img src="https://via.placeholder.com/220x150.png?text=TEMP" />
              </CardMedia>
            </Grid>
            <Grid item>
              <Typography variant="body1">This is a temp for the solution screenshots</Typography>
            </Grid>
          </Grid>
        </Container> */}

        {/* Creating a seciton for team */}
        {/* <Container className={classes.heroContent}>
          <Typography variant="h2" align="center">Meet the Team</Typography>
          <Grid container justify={'center'} spacing={10} className={classes.cardGrid}>
            <Grid item>
            </Grid>
          </Grid>
        </Container> */}
      </main>






      {/* Footer */}
      <footer className={classes.footer}>

        <Typography variant="h6" align="center" gutterBottom>
          Contact
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          This project is a part of the Capstone Project course at the University of Washington Information School
        </Typography>
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={6}>
          <Grid item>
            <Link href="mailto:jhongb@uw.edu" color="textSecondary" underline="none">jhongb@uw.edu</Link>
          </Grid>
          <Grid item>
            <Link href="mailto:angelashen0607@gmail.com" color="textSecondary" underline="none">angelashen0607@gmail.com</Link>
          </Grid>
          <Grid item>
            <Link href="mailto:kamelr@uw.edu" color="textSecondary" underline="none">kamelr@uw.edu</Link>
          </Grid>
          <Grid item>
            <Link href="mailto:thuynh12@uw.edu" color="textSecondary" underline="none">thuynh12@uw.edu</Link>
          </Grid>
        </Grid>
        <span></span>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <Link href="https://ischool.uw.edu/capstone" underline="hover">see other projects</Link>
        </Typography>

      </footer>
    </React.Fragment>
  );
}