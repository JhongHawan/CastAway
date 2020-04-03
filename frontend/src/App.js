import React, { Component } from 'react';
import './App.css';
import Myths from './components/Myths';
import History from './components/History';
import Stories from './components/Stories';
import About from './components/About/About'; 
import Visualization from './features/visualization/Visualization'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

import HomePage from './components/HomePage';


// import heroCarousel from './components/Carousel';

function App() {
  return (
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

  );
}

const Home = () => (
  <HomePage />
);




export default App;
