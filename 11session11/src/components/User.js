import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    //API Call
    const timer = setInterval(() => {
      console.log("Namaste React App");
    }, 1000);

    console.log("useEffect");

    return () => {
      console.log("useEffect Return");
      clearInterval(timer);
    };
  }, []);

  console.log("render");

  // useEffect(() => {
  //   //API Call
  // }, [count]);

  // useEffect(() => {
  //   //API Call
  // }, [count2]);

  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg ">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Delhi</h3>
      <h4>Contact: @akshay27</h4>
    </div>
  );
};

export default User;
