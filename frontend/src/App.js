import React, { Component } from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Context from './components/Context';
import Stories from './components/Stories';
import Visualization from './components/Visualization';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
// import { Carousel, CarouselItem, } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselItem from 'react-bootstrap/CarouselItem';
// import CarouselCaption from 'react-bootstrap/CarouselCaption';
// import { Link as RouterLink } from 'react-router-dom';

// import ReactFullpage from '@fullpage/react-fullpage';
// import ScrollToTopOnMount from '@fullpage/react-fullpage';
import { Box, Grid } from '@material-ui/core';
import Carousel from './components/Carousel';
import MythCard from './components/MythCard';



// import heroCarousel from './components/Carousel';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/context" component={Context} />
          <Route path="/stories" component={Stories} />
          <Route path="/visualization" component={Visualization} />
        </Switch>
      </div>
    </Router>

  );
}



const Home = () => (
  <div>
    <Carousel />
    <Box className="heading1 sep">
      <h1>| WHY IT MATTERS</h1>
      <h6>SOME SORT OF ACTION TO BE TAKEN OR SAID</h6>
      <p>There are more people on the move than ever before. An unparalleled 70.8 million people around the world have been forced from their home. Among them are nearly 25.9 million refugees, over half of whom are children under the age of 18. The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference.  </p>
      <p>Immigrants helped build our nation and make it what it is now. We should do everything in our power to embrace them and not exclude them.</p>
    </Box>
    <Box className="heading1 sep">
      <h1>| CALL TO ACTION</h1>
      <h6>SOME SORT OF ACTION TO BE TAKEN OR SAID</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Box>
    <Box className="heading1">
      <h1>| COMMON REFUGEE MYTHS</h1>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <MythCard />
        </Grid>
        <Grid item lg={4}>
          <MythCard />
        </Grid>
        <Grid item lg={4}>
          <MythCard />
        </Grid>
      </Grid>
    </Box>


  </div>

);




export default App;
