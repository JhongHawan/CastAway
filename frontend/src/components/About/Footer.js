import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import BottomNav from './BottomNav'; 

const useStyles = makeStyles(theme => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    color: "#FFFFFF",
    background: theme.palette.primary.main,
    marginTop: "5%",
    fontSize: ".5rem"
  },
  copyright: {
    display: "flex",
    color: "#FFFFFF",
    justifyContent: "center",
    marginTop: "2.5%",
    marginBottom: "1%",
    "&:hover": {
      color: "#F16841",
      textDecoration: "none"
    }
  },
  bottomNav: {
    color: "#FFFFFF",
    marginTop: "0"
  }, 
  hr: {
    background: "#FFFFFF",
    height: "1px",
    width: "50%"
  },
  container: {
    marginTop: "2.5%"
  }
}));

function Footer() {
  const classes = useStyles(); 

  return(
   <div className={classes.footer}>
    <Container className={classes.container}>
      <BottomNav className={classes.bottomNav}></BottomNav>
      <hr className={classes.hr}></hr>
      <div>
        <a className={classes.copyright} target="_blank" href="https://jhonghawan.github.io/CastAway/">© 2020 Copyright: CASTAWAY</a>
      </div>
    </Container>
   </div>
  );
}

export default Footer; 