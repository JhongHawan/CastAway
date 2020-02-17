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
}));

function AppNavBar() {
  const classes = useStyles();

  return (
    <div className="AppNavBar">
      <AppBar position="relative" className={classes.AppNavBar} color="transparent" style={{ boxShadow: 'none' }}>
        <Toolbar>
          <Grid container justify="center" alignItems="center">
            {/* <Typography variant="h6" color="primary" noWrap>
              (dis)placed
                </Typography> */}
            <img src="logo.png" className={classes.logo} width="125px" title="logo" />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;