import { MainRuntime } from "@teambit/cli";
import { ReactAspect } from "@teambit/react";
import { EnvsAspect } from "@teambit/envs";
import { MuiThemeProviderAspect } from "./mui-theme-provider.aspect";

export class ReactWithMuiMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]) {
    console.log({ reactebv: react.reactEnv });
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * override dependencies here
       */
      react.overrideDependencies({
        dependencies: {
          "@mui/material": "-",
          react: "-",
          "react-dom": "-",
          "@testing-library/react": "-",
          "@babel/runtime": "-",
          "core-js": "-",
          "@teambit/harmony": "-",
          "@rajat_sharma/sample_bit.mui-theme-provider": "-",
        },
        devDependencies: {
          "@mui/material": "-",
          react: "-",
          "react-dom": "-",
          "@testing-library/react": "-",
          "@rajat_sharma/sample_bit.mui-theme-provider": "-",
        },
        peerDependencies: {
          "@mui/material": {
            version: "^5.11.15",
            resolveFromEnv: true,
          },
          react: {
            version: "^16.8.0 || ^17.0.0",
            resolveFromEnv: true,
          },
          "react-dom": {
            version: "^16.8.0 || ^17.0.0",
            resolveFromEnv: true,
          },
          "@babel/runtime": {
            version: "7.20.0",
            resolveFromEnv: true,
          },
          "core-js": {
            version: "^3.0.0",
            resolveFromEnv: true,
          },
          "@teambit/harmony": {
            version: "0.4.6",
            resolveFromEnv: true,
          },
          "@rajat_sharma/sample_bit.mui-theme-provider": {
            version: "latest",
            resolveFromEnv: true,
          },
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ReactWithMuiMain();
  }
}

MuiThemeProviderAspect.addRuntime(ReactWithMuiMain);
export default ReactWithMuiMain;
