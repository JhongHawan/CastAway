import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import '../App.css';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  hamburgerIcon: {
    // Customize the navbar hamburger menu later. 
    borderColor: "#f31baa"
  }
}));

// TODO: change the font of the links in navbar
function NavBar() {
  const classes = useStyles(); 

  return (
    <Navbar collapseOnSelect expand="lg" className="sticky">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.hamburgerIcon}/>
      <Navbar.Brand className="ml-auto" as={Link} to="/">
        {/* <Logo className="logo" /> */}
        <Grid container justify="center" alignItems="center" spacing={1}> 
          <Grid item align="center">
            <img src="castawayLogo.png" width="50px" alt="castaway boat logo" />
          </Grid>
          <Grid item align="center">
            <h4 className="brand">CAST| |AWAY</h4>
          </Grid>
        </Grid>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/context">Context</Nav.Link>
          <Nav.Link as={Link} to="/stories">Stories</Nav.Link>
          <Nav.Link as={Link} to="/visualization">Visualization</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar; 
