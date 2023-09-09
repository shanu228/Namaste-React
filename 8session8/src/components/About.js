// import User from "./User";
// import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Namaste React from About Page</h2>
//       <h2>Namaste React from About Page</h2>
//       {/* <User name={"Akshay (function)"} /> */}

import { Component } from "react";

//       <UserClass name={"AKshay (class)"} location={"delhi class"} />
//     </div>
//   );
// };

// export default About;

// --------------------------

// using class based component

// import User from "./User";
// import UserClass from "./UserClass";
// import React from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("Parent Constructor  ABout Component");
//   }

//   componentDidMount() {
//     console.log("Parent Component Did Mount About");

//     // Api Call
//   }
//   render() {
//     console.log("Parent Render  About Component");
//     return (
//       <div>
//         <h1>About</h1>
//         <h2>Namaste React from About Page</h2>
//         <h2>Namaste React from About Page</h2>
//         {/* <User name={"Akshay (function)"} /> */}

//         <UserClass name={"First (class)"} location={"delhi class"} />
//         <UserClass name={"Second (class)"} location={"USA class"} />
//       </div>
//     );
//   }
// }

// export default About;

// ------------------------------------

// API Call in Class Component

import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor  ABout Component");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount About");
    // Api Call
  }
  render() {
    // console.log("Parent Render  About Component");
    return (
      <div>
        <h1>About</h1>
        <h2>Namaste React from About Page</h2>
        <h2>Namaste React from About Page</h2>
        <User name={"Akshay (function)"} />

        {/* <UserClass name={"First (class)"} location={"delhi class"} /> */}
      </div>
    );
  }
}

export default About;
