import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DirectionsBoat from '@material-ui/icons/DirectionsBoat';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   logo: {
     marginRight: theme.spacing(2),
   }
 }));

function Logo() {
  const classes = useStyles(); 

  return(
        <IconButton
            edge="middle"
            className={classes.logo}
            color="inherit"
            aria-label="open drawer"
        >
            <DirectionsBoat />
        </IconButton>
  );
}

export default Logo; 
