import React, { Component, lazy } from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";

/**
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * lazy loading
 * on demand loading
 * dynamic import
 *
 */
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication

  useEffect(() => {
    // Make an API call and semd username and password
    const data = {
      name: "Akshay Saini",
    };

    setUserName(data.name);
  }, []);

  // return (
  //   //Default
  //   <UserContext.Provider value={{ loggedInUser: userName }}>
  //     {/* Akshay Saini */}
  //     <div className="app">
  //       <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
  //         {/* Elon Musk */}
  //         <Header />
  //       </UserContext.Provider>

  //       <Outlet />
  //     </div>
  //   </UserContext.Provider>
  // );

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
