import { createMuiTheme } from '@material-ui/core/styles';
/* 
Default theme for all pages. We should only need to change the
palette object for colors and the typography object for fonts. 

Spacing should just be taken care of for individual components. 

Material-UI Default Theme Documentation: https://material-ui.com/customization/default-theme/#default-theme
*/
const customTheme = createMuiTheme({
  palette: {
    primary: {
       main: '#002851',
    },
    secondary: {
       main: '#f16841',
    },
  },
  // Put fonts in here for general text. Add different fonts for different headers and edit 
  // their size. 
  typography: {
     h1: {
         
     },
     h2: {

     },
     h3: {

     },
     subtitle1: {
        fontSize: 12,
     }, 
     fontFamily: 'zeitung, sans-serif',
     fontWeight: 400,
  }
});

export default customTheme; 