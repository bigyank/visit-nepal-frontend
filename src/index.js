import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import "fontsource-roboto";
import { UserProvider } from "./user-contex";
import App from "./App";

ReactDOM.render(
  <CssBaseline>
    <UserProvider>
      <App />
    </UserProvider>
  </CssBaseline>,
  document.getElementById("root")
);
