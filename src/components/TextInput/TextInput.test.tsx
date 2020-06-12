import React from "react";
import TextInput from "./TextInput";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("<TextInput/>", () => {

  afterEach(cleanup);
  test("Snapshot renders correctly", () => {
    const props = {
      value: "Test",
      onChange : jest.fn(),
    };

    const textInput = render(<TextInput {...props} />);
    
    expect(textInput).toMatchSnapshot();
  });

  test("OnChange is working as expected", () => {
    const props = {
      value: "Test",
      onChange : jest.fn(),
    };

    const { getByTestId } = render(<TextInput {...props} />);
    
    fireEvent.change(getByTestId("textInput"), { target: { value: "Test Input Value" }});

    expect(props.onChange).toHaveBeenCalled();
  });
});