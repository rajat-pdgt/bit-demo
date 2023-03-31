import React from "react";
import { PreviewRuntime } from "@teambit/preview";
import { ReactAspect } from "@teambit/react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { MuiThemeProviderAspect } from "./mui-theme-provider.aspect";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function ThemeProvider({ theme = defaultTheme, children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export class ReactWithMuiPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]) {
    const reactWithMuiPreviewMain = new ReactWithMuiPreviewMain();

    react.registerProvider([ThemeProvider]); // <----- Register your theme provider here

    return reactWithMuiPreviewMain;
  }
}

MuiThemeProviderAspect.addRuntime(ReactWithMuiPreviewMain);
