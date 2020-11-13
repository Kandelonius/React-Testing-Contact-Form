import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


// first name error doesn't clear
// email doesn't seem to have an error when insuficiant info is entered.
// submit button doesn't appear to do anything.