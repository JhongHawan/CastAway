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

import ButtonBase from '@material-ui/core/ButtonBase';
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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} align="right">
            
            <img className={classes.img} src="hero-image-landing.jpg" width="60%"/>
        </div>
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