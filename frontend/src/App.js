import React from 'react';
import './App.css';
import Myths from './components/Myths';
import History from './components/History';
import Stories from './components/Stories';
import About from './components/About/About';
import Visualization from './features/visualization/Visualization';
import customTheme from './styles/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import Terminology from './components/Terminology';
import YourRole from './components/YourRole/YourRole';
import VettingProcess from './components/VettingProcess';
import Context from './components/Context';
import Footer from './components/About/Footer';


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/myths" component={Myths} />
            <Route path="/background" component={Context} />
            <Route path="/terminology" component={Terminology} />
            <Route path="/vettingProcess" component={VettingProcess} />
            <Route path="/history" component={History} />
            <Route path="/stories" component={Stories} />
            <Route path="/data" component={Visualization} />
            <Route path="/yourRole" component={YourRole} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
