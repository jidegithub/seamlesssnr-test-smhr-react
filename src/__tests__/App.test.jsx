//App.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('that a button exist', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('count-button');
    expect(button).toBeInTheDocument();
  });
});