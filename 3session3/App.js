// import React from "react";
// import ReactDOM from "react-dom/client";

// // React.createElement gives a React element and it is an object and it is rendered as an HTML element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// console.log(heading);

// // JSX -> HTML or XML like syntax. JSX code transplies before it reaches JS Engines, Babel do this transpilation

// // JSX => React.createElement => React element-JS Object => HTML Element(render)

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// ----------------------------------

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// JSX -> HTML or XML like syntax. JSX code transplies before it reaches JS Engines, Babel is a transpiler and it does this transpilation

// JSX => React.createElement => React element-JS Object => HTML Element(render)

const elem = <span>React Element</span>;

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    {elem} Namaste React using JSX element
  </h1>
);

// Functional Component
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX Functional Component
  </h1>
);

// Component Composition -> One component inside another
const HeadingComponent = () => {
  return (
    <div id="container">
      {heading}
      <Title />
      <Title></Title>
      {Title()}

      <h1 className="heading">NamasteReact Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
