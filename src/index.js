import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { createTheme } from "@teambit/base-react.themes.theme-provider";

// const defaultDesignTokenValues = {
//   colorBackground: "#ffffff",
//   colorText: "#cab854",
// };

// const Theme = createTheme({
//   theme: defaultDesignTokenValues,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Theme.ThemeProvider> */}
    <App />
    {/* </Theme.ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
