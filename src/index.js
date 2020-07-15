//this file starts our engine but it is not a react component.
//it gives the top level react componenet to the render function
import React from "react";
import ReactDOM from "react-dom";

import data from "./data";
//DEFAULT XPORTS ARE NOT IN SQUIGGLIES
import App from "./components/App";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} />,
  //We're rendering the `App` component, and we're setting its props to:
  // FIRST PARAMETER IS WHAT
  rootElement
  //SECOND PARAMETER IS WHERE
);
