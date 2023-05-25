import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// renders 'About' test
describe('About component', () => {
    // First Test: verifies the component is rendering
    it('renderssss', () => { // 'it' can be used alternatively with 'test'
        render(<About />);
    });

    // Second Test: aka "test case" - compares snapshot versions of the DOM node structure
    // ? A snapshot is the serialized version of the DOM Node structure, enabled by Jest
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />); // asFragment returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
    })

})

afterEach(cleanup);