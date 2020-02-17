import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Context from './components/Context';
import Stories from './components/Stories';
import Visualization from './components/Visualization'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
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
    <h1>Home Page</h1>
  </div>
);

export default App;
