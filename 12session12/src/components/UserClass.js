// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//     this.state = {
//       count: 0,
//       count2: 2,
//     };

//     console.log(this.props.name + "Child Constructor UserClass Component");
//   }

//   componentDidMount() {
//     console.log(this.props.name + "Child Component Did Mount UserClass");
//     // API Call
//   }
//   render() {
//     const { name, location } = this.props;
//     console.log(this.props.name + "Child Render UserClass Component");
//     return (
//       <div className="user-card">
//         <h1>Count: {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//               count2: this.state.count2 + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button>
//         <h2>Name: {name}</h2>
//         <h3>Location: {this.props.location}</h3>
//         <h4>Contact: @akshay27</h4>
//       </div>
//     );
//   }
// }

// export default UserClass;

// // Parent Constructor  ABout Component
// // Parent Render  About Component

// //    First (class)Child Constructor UserClass Component
// //    First (class)Child Render UserClass Component

// //    Second (class)Child Constructor UserClass Component
// //    Second (class)Child Render UserClass Component

// //    First (class)Child Component Did Mount UserClass
// //    Second (class)Child Component Did Mount UserClass

// // Parent Component Did Mount About

// ---------------------------------------------------------

// API Call in Class Component

// using class based component

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };

    console.log(this.props.name + "Child Constructor UserClass Component");
  }

  async componentDidMount() {
    // Api Call
    console.log(this.props.name + "Child Component Did Mount UserClass");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.timer = setInterval(() => {
      console.log("Namaste React App");
    }, 1000);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === prevState.count) {
      //code
    }
    if (this.state.count2 === prevState.count2) {
      //code
    }

    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + "Child Render UserClass Component");
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshay27</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *  ----MOUNTING-----
 *
 * Constructor (dummy)
 * Render (dummy)
 *     <HTML Dummy>
 * Component Did Mount
 *     <API Call>
 *     <this.setState> -> State variable is updated
 *
 * UPDATE
 *
 *    render(API data)
 *    <HTML (new API data)>
 *    componentDid Update
 */
