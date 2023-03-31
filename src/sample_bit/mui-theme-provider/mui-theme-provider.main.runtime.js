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
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ReactWithMuiMain();
  }
}

MuiThemeProviderAspect.addRuntime(ReactWithMuiMain);
