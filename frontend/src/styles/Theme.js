import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

/* 
Default theme for all pages. We should only need to change the
palette object for colors and the typography object for fonts. 

Spacing should just be taken care of for individual components. 

Material-UI Default Theme Documentation: https://material-ui.com/customization/default-theme/#default-theme
*/
const theme = createMuiTheme({
  palette: {
    primary: {
       main: '#f16841',
       contrastText: '#002851'
    },
    secondary: {
       main: '#c9d6df',
       contrastText: '#002851'
    },
  },
  // Put fonts in here for general text. Add different fonts for different headers and edit 
  // their size. 
  typography: {
     fontFamily: 'zeitung, sans-serif',
     fontWeight: 400
  }
});

export default theme; 