// Counter.test.jsx

import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../components/Button";

//test block
test("increments counter", () => {
  // render the component on virtual dom
  render(<Button />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("count-button");
  const incrementBtn = screen.getByTestId("count-button");

  //interact with those elements
  fireEvent.click(incrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("1");
});