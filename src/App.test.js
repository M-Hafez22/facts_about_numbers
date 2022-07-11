import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders random facts', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/random facts/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Choose the type of input', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Choose the type of input/i);
  expect(linkElement).toBeInTheDocument();
});
