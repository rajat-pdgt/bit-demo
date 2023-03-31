import { MainRuntime } from "@teambit/cli";
import { ReactAspect } from "@teambit/react";
import { EnvsAspect } from "@teambit/envs";
import { MuiThemeProviderAspect } from "./mui-theme-provider.aspect";

export class ReactWithMuiMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]) {
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
        },
        devDependencies: {
          "@mui/material": "-",
          react: "-",
          "react-dom": "-",
          "@testing-library/react": "-",
        },
        peerDependencies: {
          "@mui/material": {
            version: "5.2.1",
            resolveFromEnv: true,
          },
          "@testing-library/react": {
            version: "^5.0.6",
            resolveFromEnv: true,
          },
          react: {
            version: "^17.0.2",
            resolveFromEnv: true,
          },
          "react-dom": {
            version: "^17.0.2",
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
