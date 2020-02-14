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
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

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
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container className={classes.heroContent}>
            <Grid className={classes.heroContent} container spacing={2}>
              <Grid item md>
                <Typography variant="h1" className="child">Making An Impact</Typography>
                <Typography variant="body1" className="padding">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Grid>
              <Grid item md={6} className="landing-image">

              </Grid>
            </Grid>
            <Typography align="center" variant="h2" className="child">Our Solution</Typography>
            <Grid container justify={'center'} spacing={10}>
              <Grid item justify={'center'}>
                {/* <CardMedia className="media" compoent={'img'} */}
                <CardMedia>
                  <img src="https://via.placeholder.com/220x150.png?text=TEMP"/>
                </CardMedia>
              </Grid>
              <Grid item>
                <Typography variant="body1">This is a temp for the solution screenshots</Typography>
              </Grid>
            </Grid>
          </Container>
          {/* Grid for solution screenshots */}
        </div>

        {/* working unresponsive */}
        {/* <div className={classes.heroContent} id="wrapper">
          <div id="landing-image">
            <Typography variant="h2" id="child">
              You Can Make An Impact
            </Typography>
            <Typography variant="body1" id="child2">
              There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.
            </Typography>
          </div>
        </div> */}
        {/* <div className={classes.heroContent}>
          <Typography variant="h3" align="center">Solution</Typography>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container>

            </Grid>
          </Container>
        </div> */}


        {/* <div className={classes.heroContent} align="right">
          <img className={classes.img} src="hero-image-landing.jpg" width="60%" />
        </div> */}


        {/* <div className={classes.heroContent} align="right"> */}
        {/* <img className={classes.img} src="hero-image-landing.jpg" width="60%"/> */}
        {/* </div> */}
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