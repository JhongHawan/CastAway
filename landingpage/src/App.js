import React from 'react';
import AppNavBar from './components/AppNavBar';
import Template from './components/Template';
import './App.css';
import Landing from './components/Landing';
import customTheme from './styles/Theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={customTheme}>

      <div className="App">
        {/* <AppNavBar></AppNavBar> */}
        {/* <Template></Template> */}
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
