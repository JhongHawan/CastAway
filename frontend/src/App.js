import React, { Component } from 'react';
import './App.css';
import Myths from './components/Myths';
import History from './components/History';
import Stories from './components/Stories';
import About from './components/About/About';
import Visualization from './features/visualization/Visualization';
import customeTheme from './styles/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

import HomePage from './components/HomePage';

import Hero from './components/Hero';
import Footer from './components/About/Footer';

// import heroCarousel from './components/Carousel';

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/myths" component={Myths} />
            <Route path="/history" component={History} />
            <Route path="/stories" component={Stories} />
            <Route path="/visualization" component={Visualization} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>

  );
}

// Homepage
const Home = () => (
  <div>
    <Hero
      showCard={true}
      sectionTitle="No one puts their children in a boat unless the water is safer than the land"
      cardTitle="WHY DOES IT MATTER?"
      cardSubtitle="Subtitle"
      cardBody="The only way to describe this situation while emphasizing its urgency is by calling it what it is, a crisis, a refugee crisis. This crisis is an ongoing global issue that requires immediate action from people who care enough to make a difference."
    />
    <HomePage />
    <Footer />
  </div>
);




export default App;
