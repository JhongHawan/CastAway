import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function NavBar() {
  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/context">Context</Nav.Link>
          <Nav.Link as={Link} to="/stories">Stories</Nav.Link>
          <Nav.Link as={Link} to="/visualizations">Visualizations</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar; 
