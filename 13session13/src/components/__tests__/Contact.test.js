// Unit Testing

// import { render, screen } from "@testing-library/react";
// import Contact from "../Contact";
// import "@testing-library/jest-dom";

// test("Should load contact us component", () => {
//   render(<Contact />);

//   const heading = screen.getByRole("heading");

//   // Assertion
//   expect(heading).toBeInTheDocument();
// });

// test("Should load button inside Contact component", () => {
//   render(<Contact />);

//   const button = screen.getByRole("button");
//   // const button = screen.getByText("Submit");

//   // Assertion
//   expect(button).toBeInTheDocument();
// });

// test("Should load input inside Contact component", () => {
//   render(<Contact />);

//   const inputName = screen.getByPlaceholderText("name");

//   // Assertion
//   expect(inputName).toBeInTheDocument();
// });

// test("Should load 2 input boxes on the Contact component", () => {
//   render(<Contact />);

//   // Querying
//   const inputBoxes = screen.getAllByRole("textbox");

//   // console.log(inputBoxes.length);

//   // Assertion

//   expect(inputBoxes.length).toBe(2);
//   // expect(inputBoxes.length).not.toBe(3);
// });

// -----------------------------------------------------

// Unit Testing

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // we can write "it" also in place of "test". "it" is an alias of "test"
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    // Assertion

    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
