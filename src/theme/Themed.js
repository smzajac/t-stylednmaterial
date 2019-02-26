import React from 'react';

//styled components
import { ThemeProvider } from "styled-components";

//material UI
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"


// A helper for wrapping something in the default theme.
// Replaces a regular ThemeProvider from styled-components
// https://www.styled-components.com/docs/advanced#theming
// const Themed = ({ children }) => {
//     return <ThemeProvider theme={base}>{children}</ThemeProvider>
//   };


  //Mui does have a default structure that their components inherit their styling from we
  // need to modify this existing structure in order to change the overarching theme
  //https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component

  const muiTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    }
  });

  // console.log(muiTheme)

  const Themed = withStyles({}, {withTheme: true})(({ children }) => {
    return <ThemeProvider theme={muiTheme}>
        {children}
    </ThemeProvider>
})


  export default Themed;