import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'; 
import Link from '@material-ui/core/Link'; 

function AppNavBar() {
  return (
    <div className="AppNavBar">
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;