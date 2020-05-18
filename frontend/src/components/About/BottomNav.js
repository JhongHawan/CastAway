import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
      <BottomNavigationAction 
        href="https://github.com/JhongHawan/InfoCapstone2020"
        label="GitHub" 
        icon={<GitHubIcon />}
        className={classes.navigationLink} 
        value="github"
        target="_blank"
      />
    </BottomNavigation>
  );
}

export default BottomNav; 