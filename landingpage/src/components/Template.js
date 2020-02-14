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


import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
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
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#F16841'
  }
  // Testing screen size
  // root: {
  //   [theme.breakpoints.down('sm')]: {
  //     background: 'hero-image-landing.jpg',
  //     // background: 'hero-image-landing.jpg',
  //     // backgroundColor: theme.palette.primary.main,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     // background: 'hero-image-landing.jpg',
  //     backgroundColor: theme.palette.primary.main,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     // background: 'hero-image-landing.jpg',
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  // }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Card className={classes.landingCard}>
          <CardMedia className={classes.landingImg} image={'landing.jpeg'} />
          <div className={classes.textOverlay}>
            {/* TODO fix to make reactive in mobile better */}
            <Typography variant="h2">Make An Impact</Typography>
          </div>
        </Card>
        <Container className={classes.heroContent}>
          <Box className={classes.heroContent}>
            <Typography variant="h2" align="center">Purpose</Typography>
          </Box>
          <Box className={classes.heroContent}>
            <Typography variant="body1">
              There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.
            </Typography>
          </Box>
          <Box className={classes.heroContent}>
            <Typography variant="body1">
              The biggest obstacle and the first step in making a difference is getting educated.The issue at hand comes from a lack of information and knowledge and often the spread of misinformation. The refugee crisis is adding fuel to the fire of racism, xenophobia and Islamophobia. The attempted US travel bans have been characterized as a response to a ‘phantom menace’. Pointing the Islamophobic or xenophobic finger at refugees and immigrants only hieghtens the conditions and completely disregards the real reasons they are in the host countries to begin with.
            </Typography>
          </Box>
          <Box className={classes.heroContent}>
            <Typography variant="body1">
              Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.
            </Typography>
          </Box>
        </Container>
        <Container className={classes.heroContent}>
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
        </Container>
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
            {/* <Typography variant="subtitle1" color="textSecondary">jhongb@uw.edu</Typography> */}
          </Grid>
          <Grid item>
            <Link href="mailto:angelashen0607@gmail.com" color="textSecondary" underline="none">angelashen0607@gmail.com</Link>
            {/* <Typography variant="subtitle1" color="textSecondary">angelashen0607@gmail.com</Typography> */}
          </Grid>
          <Grid item>
            <Link href="mailto:kamelr@uw.edu" color="textSecondary" underline="none">kamelr@uw.edu</Link>
            {/* <Typography variant="subtitle1" color="textSecondary">kamelr@uw.edu</Typography> */}
          </Grid>
          <Grid item>
            <Link href="mailto:thuynh12@uw.edu" color="textSecondary" underline="none">thuynh12@uw.edu</Link>
            {/* <Typography variant="subtitle1" color="textSecondary">thuynh12@uw.edu</Typography> */}
          </Grid>
        </Grid>
        <span></span>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <Link href="https://ischool.uw.edu/capstone" underline="hover">see other projects</Link>
        </Typography>

      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}