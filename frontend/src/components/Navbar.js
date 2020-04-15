import React from 'react';
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../App.css';
import { Grid, Typography } from '@material-ui/core';



import { useStyles } from './Styles';


function NavBar() {
  const classes = useStyles();

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" bg="bg-light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.hamburgerIcon} />
      <Navbar.Collapse>
        <Container >
          <Col xs lg="2">
            <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/stories">Stories</Nav.Link>
          </Col>
          <Col xs lg="2">
            <NavDropdown className={classes.navLink} id="nav-dropdown" title="Context" id="nav-dropdown">
              <NavDropdown.Item className={classes.navLink} id="nav-dropdown" as={Link} to="/history">History</NavDropdown.Item>
              <NavDropdown.Item className={classes.navLink} id="nav-dropdown" as={Link} to="/myths">Myths</NavDropdown.Item>
            </NavDropdown>
          </Col>

          {/* TODO - Fix hover over on h4 */}
          <Col className={"text-center"} md="auto" as={Link} to="/" >
            <img src="castawayLogo.png" width="50px" alt="castaway boat logo" />
            <h4 className={classes.navTitle}>CASTAWAY</h4>
          </Col>
          <Col xs lg="2">
            <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/visualization">Visualization</Nav.Link>
          </Col>
          <Col xs lg="2">
            <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/about">About</Nav.Link>
          </Col>

        </Container>
      </Navbar.Collapse>



    </Navbar>




    // <Navbar collapseOnSelect expand="lg" variant="light" bg="bg-light">
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.hamburgerIcon}/>
    //   <Navbar.Brand className="ml-auto" as={Link} to="/">
    //     <Grid container justify="center" alignItems="center" spacing={1}>
    //       <Grid item align="center">
    //         <h2 className={classes.navTitle}>CAST|</h2>
    //       </Grid>
    //       <Grid item align="center">
    //         <img src="castawayLogo.png" width="50px" alt="castaway boat logo" />
    //       </Grid>
    //       <Grid item align="center">
    //         <h2 className={classes.navTitle}>|AWAY</h2>
    //       </Grid>
    //     </Grid>
    //   </Navbar.Brand>
    // <Navbar.Collapse id="responsive-navbar-nav">
    //   <Nav className="mr-auto">
    //     <Nav.Link as={Link} to="/">Home</Nav.Link>
    //     <NavDropdown title="Context" id="nav-dropdown">
    //       <NavDropdown.Item as={Link} to="/history">History</NavDropdown.Item>
    //       <NavDropdown.Item as={Link} to="/myths">Myths</NavDropdown.Item>
    //     </NavDropdown>
    //     <Nav.Link as={Link} to="/stories">Stories</Nav.Link>
    //     <Nav.Link as={Link} to="/visualization">Visualization</Nav.Link>
    //     <Nav.Link as={Link} to="/about">About</Nav.Link>
    //   </Nav>
    // </Navbar.Collapse>
    // </Navbar>
  );
}


export default NavBar; 
