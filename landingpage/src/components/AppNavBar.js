import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
      <AppBar position="fixed" className={classes.AppNavBar} color="transparent" style={{ boxShadow: 'none' }}>
        <Toolbar>
          <Grid container justify="left" alignItems="center">
            <Grid item>
              <img src="sideLogo.png" className={classes.logo} width="150px" title="logo" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;