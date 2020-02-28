import React from 'react';
import './App.css';
import Context from './components/Context';
import Stories from './components/Stories';
import About from './components/About/About'; 
import Visualization from './features/visualization/Visualization'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

import ReactFullpage from '@fullpage/react-fullpage';
import { Box } from '@material-ui/core';

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
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>

  );
}

const Home = () => (
  // <ReactFullpage
  // <div>
  //   <h1>Home Page</h1>
  // </div>
  <FullpageQuotes />
);

class FullpageQuotes extends React.Component {
  // Good to knows
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return(
      // <ReactFullpage></ReactFullpage> 
      <ReactFullpage 
        scrollOverflow={true}
        sectionsColor={['#F0F5F9', '#F0F5F9']}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi}) => {
          return(
            <Box id="fullpage-wrapper">
              <Box className="section quote">
                <h2 className="lightText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h2>
              </Box>
              <Box className="section quote">
                <h1 className="boldText">BOO</h1>
              </Box>
            </Box>
          );
        }}
      />
    )
  }
}


export default App;
