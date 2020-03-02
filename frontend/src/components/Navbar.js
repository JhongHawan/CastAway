import React from 'react';
import {
  Navbar,
  NavDropdown,
  Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import '../App.css';
import { Grid, Typography } from '@material-ui/core';


// TODO: change the font of the links in navbar
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" bg="bg-light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand className="ml-auto" as={Link} to="/">
        {/* <Logo className="logo" /> */}
        <Grid container justify="center" alignItems="center" spacing={1}>
          {/* <Grid item align="center">
            <img src="castawayLogo.png" width="50px" alt="castaway boat logo" />
          </Grid> */}
          <Grid item align="center">
            <h2 className="brand">CAST|</h2>
            {/* <img src="castawayLogo.png" width="50px" alt="castaway boat logo" /> */}
            {/* <h1 className="brand"> |AWAY</h1> */}
          </Grid>
          <Grid item align="center">
            {/* <h1 className="brand">CAST|</h1> */}
            <img src="castawayLogo.png" width="50px" alt="castaway boat logo" />
            {/* <h1 className="brand"> |AWAY</h1> */}
          </Grid>
          <Grid item align="center">
            {/* <h1 className="brand">CAST|</h1> */}
            {/* <img src="castawayLogo.png" width="50px" alt="castaway boat logo" /> */}
            <h2 className="brand"> |AWAY</h2>
          </Grid>
        </Grid>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Context" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/history">History</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/myths">Myths</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/stories">Stories</Nav.Link>
          <Nav.Link as={Link} to="/visualization">Visualization</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar; 
