import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders a button with expected children", () => {
  const { getByText } = render(<Button>Hello World</Button>);
  const buttonElement = getByText(/Hello World/i);
  expect(buttonElement).toBeInTheDocument();
});
