import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DirectionsBoat from '@material-ui/icons/DirectionsBoat';

import { useStyles } from './Styles';

function Logo() {
  const classes = useStyles(); 

  return(
        <IconButton
            edge="middle"
            className={classes.mainLogo}
            color="inherit"
            aria-label="open drawer"
        >
            <DirectionsBoat />
        </IconButton>
  );
}

export default Logo; 
