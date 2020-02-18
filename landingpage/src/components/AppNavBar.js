import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  logo: {
    margin: theme.spacing(2, 2, 2),
  },
  AppNavBar: {
    backgroundColor: '#C9D6DF',
  },
  bigHeadingColor: {
    color: '#F16841'
  },
}));

function AppNavBar() {
  const classes = useStyles();

  return (
    <div className="AppNavBar">
      <AppBar position="relative" className={classes.AppNavBar} color="transparent" style={{ boxShadow: 'none' }}>
        <Toolbar>
          <Grid container justify="left" alignItems="center">
            <img src="logo.png" className={classes.logo} width="100px" title="logo" />
            <Typography className={classes.bigHeadingColor} variant="h4" color="primary" noWrap>
              (dis)placed
                </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;