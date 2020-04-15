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

const Home = () => (
  <HomePage />
);




export default App;
