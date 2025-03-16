import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello there! I am Madhav"
);

const headingJsx = <h1 id="heading">This is Hello there from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJsx);
