import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/Home/App";
import Out from "./Containers/Out/Out"
import {GlobalStyles} from "./styles/globalStyles"

ReactDOM.render(
  <>
  <Out />
    {/* <App /> */}
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
