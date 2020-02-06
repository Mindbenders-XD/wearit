import React from 'react';
import { render } from '@testing-library/react';
import Product  from './product';

test('renders product detail page', () => {
    const { getByText } = render( < Product / > );
    const linkElement = getByText(/one product/i);
    expect(linkElement).toBeInTheDocument();
});