import React from "react";
import Button from "./Button";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("<Button/>", () => {

  afterEach(cleanup);
  test("Renders correctly in the document", () => {
    const props = {
      title: "Test Button",
      onClick: jest.fn(),
    };

    const { getByText } = render(<Button {...props} />);
    
    expect(getByText(props.title)).toBeInTheDocument();
  });

  test("Button onclick works correctly", () => {
    const props = {
      title: "Test Button",
      onClick: jest.fn(),
    };

    const { getByText } = render(<Button {...props} />);

    fireEvent.click(getByText(props.title));

    expect(props.onClick).toHaveBeenCalled();
  });
});