import React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#FFFF00",
    },
  },
});

function ThemeProvider({ theme = defaultTheme, children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
