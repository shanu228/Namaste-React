# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine, delery tie
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (devloper)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

1. Install React Testing Library -> npm i -D @testing-library/react

<!-- ------ ------------->

2. Installed jest -> npm i -D jest
<!-- --------------- -->

3. Installed Babel dependencies -> jest documentation -> go to "Using Babel" section -> npm install --save-dev babel-jest @babel/core @babel/preset-env

<!-- ------------------ -->

4. Configure Babel -> create babel.config.js file outside src folder and paste the following code (jest documentation) ->

module.exports = {
presets: [
["@babel/preset-env", { targets: { node: "current" } }],
["@babel/preset-react", { runtime: "automatic" }],
],
};

<!-- ---------------------------- -->

5. Configure Parcel Config file to disable default babel transpilation ->

go to parcel documentation -> getstarted -> javaScript -> go to babel section (read it to get the better understanding)-> go to "usage with other tools" section -> create .parcelrc file outside src folder and copy the follwing code which is written at this path in the documentaion ->

{
"extends": "@parcel/config-default",
"transformers": {
"\*.{js,mjs,jsx,cjs,ts,tsx}": [
"@parcel/transformer-js",
"@parcel/transformer-react-refresh-wrap"
]
}
}

 <!-- ------------------------------- -->

6. Jest configuration -> npx jest --init -> this command will initialise the jest and it will create a new configuration file for jest

yes / no -> for js or ts
select jsdom (browser-like)
give "yes" to show the coverage report
choose "babel" as provider
give "yes" to automatically clear mock calls

<!-- ------------------------------------- -->

7. Install jsdom library -> npm install --save-dev jest-environment-jsdom

<!-- ------------------------------------- -->

8. Install @babel/preset-react - to make JSX work in test cases

npm i -D babel/preset-react

<!-- ---------------------------------------------- -->

9. Include @babel/preset-react inside my babel config file->

["@babel/preset-react", { runtime: "automatic" }] -> add this inside babel.config.js file

module.exports = {
presets: [
["@babel/preset-env", { targets: { node: "current" } }],
["@babel/preset-react", { runtime: "automatic" }],
],
};

<!-- ------------------------------------------- -->

10. Install @testing-library/jest-dom

    npm i -D @testing-library/jest-dom
