import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo'; 

function NavBar() {
  return(
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand className="ml-auto" as={Link} to="/">
          <Logo className="logo" />
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/context">Context</Nav.Link>
          <Nav.Link as={Link} to="/stories">Stories</Nav.Link>
          <Nav.Link as={Link} to="/visualization">Visualization</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar; 
