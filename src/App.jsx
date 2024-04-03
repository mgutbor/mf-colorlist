import React from "react";
import ReactDOM from "react-dom";

import ColorList from "./components/ColorList";

import "./index.css";

const App = () => (
  <>
    <ColorList colorsList={[]} />
    <ColorList colorsList={["#ff0000", "#00ff00", "#0000ff"]} />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
