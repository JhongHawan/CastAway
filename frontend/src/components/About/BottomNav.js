import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom'; 
import HomeIcon from '@material-ui/icons/Home';
import ContextIcon from '@material-ui/icons/Create';
import StoriesIcon from '@material-ui/icons/ImportContacts';
import VisualizationIcon from '@material-ui/icons/InsertChart';
import AboutIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: theme.palette.primary.main
  },
  navigationLink: {
    color: theme.palette.primary.contrastText,
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none"
    }
  }
}));

function BottomNav() {
  const classes = useStyles(); 
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction 
        component={Link}
        to="/"
        label="Home" 
        icon={<HomeIcon/>}
        className={classes.navigationLink}
        value="home"
      />
      <BottomNavigationAction 
        component={Link}
        to="/context"
        label="Context" 
        icon={<ContextIcon/>}
        className={classes.navigationLink}
        value="context"
      />
      <BottomNavigationAction 
        component={Link}
        to="/stories"
        label="Stories" 
        icon={<StoriesIcon/>}
        className={classes.navigationLink}
        value="stories"
      />
      <BottomNavigationAction 
        component={Link}
        to="/visualization"
        label="Visualization"
        icon={<VisualizationIcon/>}
        className={classes.navigationLink} 
        value="visualization"
      />
      <BottomNavigationAction 
        component={Link}
        to="/about"
        label="About" 
        icon={<AboutIcon/>}
        className={classes.navigationLink}
        value="about"
      /> */}
      <BottomNavigationAction 
        href="https://github.com/JhongHawan/InfoCapstone2020"
        label="GitHub" 
        icon={<GitHubIcon />}
        className={classes.navigationLink} 
        value="github"
      />
    </BottomNavigation>
  );
}

export default BottomNav; 