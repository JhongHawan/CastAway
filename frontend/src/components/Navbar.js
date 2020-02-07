import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

function NavBar() {
  return(
   <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Logo</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#visualization">Visualizations</Nav.Link>
      <Nav.Link href="#context">Context</Nav.Link>
      <Nav.Link href="#stories">Stories</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  );
}

export default NavBar; 
