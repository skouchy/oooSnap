/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

const formData = [{ name: "", email: "", message: "" }];
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe("Contact Component", () => {
  // baseline test
  it("renders", () => {
    render(
      <ContactForm
        formData={formData}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ContactForm
        formData={formData}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("contact header", () => {
  it("matches test Id", () => {
    const { getByTestId } = render(
      <ContactForm
        formData={formData}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    expect(getByTestId("contact-header")).toHaveTextContent("Contact Me");
  });
});

describe("contact button", () => {
  it("button listens", () => {
    const { getByTestId } = render(
      <ContactForm
        formData={formData}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});

afterEach(cleanup);