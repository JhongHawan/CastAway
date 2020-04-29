import React from 'react';
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Dropdown
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
      <Navbar.Brand as={Link} to="/">
        <Row className={"justify-content-center"} >
          <Col style={{ textAlign:"center"}}>
            <img src="castawayLogo.png" width="50px" alt="castaway boat logo" />
          </Col>
          <Col style={{ textAlign:"center" }}>
            <Typography variant="h3" className={classes.navTitle}>
              CASTAWAY
            </Typography>
          </Col>
        </Row>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.hamburgerIcon} />
      <Navbar.Collapse className="justify-content-end">

        <NavDropdown
          id="basic-nav-dropdown"
          title={
            <span style={{ display: 'inline-block' }}>
              <Nav.Link as={Link} to="/context">
                <Typography variant="h6" className={classes.navLink}>
                  Context
                </Typography>
              </Nav.Link>
            </span>
          }
        >
          <NavDropdown.Item className={classes.navLink} id="nav-dropdown" as={Link} to="/history">
            History
          </NavDropdown.Item>
          <NavDropdown.Item className={classes.navLink} id="nav-dropdown" as={Link} to="/myths">
            Myths
          </NavDropdown.Item>
          <NavDropdown.Item className={classes.navLink} id="nav-dropdown" as={Link} to="/terminology">
            Terminology
          </NavDropdown.Item>
          <NavDropdown.Item className={classes.navLink} id="nav-dropdown" as={Link} to="/vetting">
            Vetting Process
          </NavDropdown.Item>
        </NavDropdown>


        <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/stories">
          <Typography variant="h6" className={classes.navLink}>
            Stories
          </Typography>
        </Nav.Link>
        <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/data">
          <Typography variant="h6" className={classes.navLink}>
            Data
          </Typography>
        </Nav.Link>
        <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/YourRole">
          <Typography variant="h6" className={classes.navLink}>
            Your Role
          </Typography>
        </Nav.Link>
        <Nav.Link className={classes.navLink} id="nav-dropdown" as={Link} to="/About">
          <Typography variant="h6" className={classes.navLink}>
            About Us
          </Typography>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar >
  );
}





export default NavBar; 
