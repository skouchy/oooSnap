/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
    name: "Park Bench",
    category: "landscape",
    description: "Lorem ipsum dolor",
    index: 1,  
};

const mockToggleModal = jest.fn();

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    // Arrange: Render Modal
    const { getByText } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
    
    // Act: Simulate click event
    fireEvent.click(getByText('Close this Modal'));
    
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});

afterEach(cleanup);
