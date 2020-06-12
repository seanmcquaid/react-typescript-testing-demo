import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe("<App/>", () => {
  afterEach(cleanup);
  test("Renders correctly", () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });

  test("Text Input displays correctly when changed", () => {
    const { getByTestId } = render(<App />);
    
    fireEvent.change(getByTestId("textInput"), { target: { value: "Test Input Value" } });
    
    expect(getByTestId("textInput")).toHaveValue("Test Input Value");
  });

  test("Button on click will add an item", () => {
    const { getByTestId, getByText } = render(<App />);
    
    fireEvent.change(getByTestId("textInput"), { target: { value: "Test Input Value" } });

    fireEvent.click(getByText("Click Me!"));

    expect(getByTestId("itemNumber0")).toBeInTheDocument();
    expect(getByTestId("textInput")).toHaveValue("");
  });
});
