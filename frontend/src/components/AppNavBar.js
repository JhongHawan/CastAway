import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import DirectionsBoat from '@material-ui/icons/DirectionsBoat';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   root: {
     flexGrow: 1,
   },
   menuButton: {
     marginRight: theme.spacing(2),
   },
   title: {
     flexGrow: 1,
     display: 'none',
     [theme.breakpoints.up('sm')]: {
       display: 'block',
     },
   },
   inputRoot: {
     color: 'inherit',
   },
   inputInput: {
     padding: theme.spacing(1, 1, 1, 7),
     transition: theme.transitions.create('width'),
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       width: 120,
       '&:focus': {
         width: 200,
       },
     },
   },
 }));

function ElevationScroll(props) { 

   const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function AppNavBar(props) {

   const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Elevate App Bar</Typography>
            <IconButton
               edge="middle"
               className={classes.menuButton}
               color="inherit"
               aria-label="open drawer"
            >
               <DirectionsBoat />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}


export default AppNavBar;