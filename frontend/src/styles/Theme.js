import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
/* 
Default theme for all pages. We should only need to change the
palette object for colors and the typography object for fonts. 

Spacing should just be taken care of for individual components. 

Material-UI Default Theme Documentation: https://material-ui.com/customization/default-theme/#default-theme
*/
let customTheme = createMuiTheme({
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
      fontFamily: 'zeitung, sans-serif',
      fontStyle: 'normal',
      h1: {
         fontWeight: 700,
         fontStyle: 'normal',
         fontSize: '5rem'
      },
      h2: {
         fontWeight: 700,
         fontStyle: 'normal',
         fontSize: '4rem'
      },
      h3: {
         fontWeight: 700,
         fontStyle: 'normal',
      },
      h4: {
         fontWeight: 700,
         fontStyle: 'normal',
      },
      h5: {
         fontWeight: 700,
         fontStyle: 'normal',
      },
      h6: {
         fontWeight: 700,
         fontStyle: 'normal',
      },
      subtitle1: {
         fontWeight: 400,
         fontStyle: 'italic',
      },
      subtitle2: {
         fontWeight: 700,
         fontStyle: 'italic'
      },
      body1: {
         fontWeight: 400,
         fontStyle: 'normal',
      },
      body2: {
         fontWeight: 400,
         fontStyle: 'normal',
      },
      button: {
         fontWeight: 400,
         fontStyle: 'normal',
      },
      caption: {
         fontWeight: 400,
         fontStyle: 'normal',
         fontSize: '0.875rem', 
      },
      overline: {
         fontWeight: 400,
         fontStyle: 'normal',
         fontSize: '0.875rem', 
      }


   }
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme; 