import React from "react";
import ReactDOM from "react-dom/client";

// this react element
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello there! I am Madhav"
);

// this is jsx
const headingJsx = <h1 id="heading">This is Hello there from JSX</h1>;

// this is functional component (Always starts with CAPITAL LETTER)

const Title = () => <p>Calling component composition</p>;
const FunctionalComponent = () => {
  return (
    <div>
      <h1 id="heading">Hello there from functional component</h1>
      {console.log("ALl three are samething")}
      {Title()}
      <Title />
      <Title></Title>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// calling react element

//root.render(heading)
// calling jsx

//root.render(headingJsx);

// calling functional component

root.render(<FunctionalComponent />);
