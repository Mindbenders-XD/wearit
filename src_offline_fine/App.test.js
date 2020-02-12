import React from 'react';
import { render } from '@testing-library/react';
import App, {sum} from './App';

test('renders learn react link', () => {
    const { getByText } = render( < App / > );
    const linkElement = getByText(/wear it/i);
    expect(linkElement).toBeInTheDocument();
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});