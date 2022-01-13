import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('login-page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Selecione/i);
  expect(linkElement).toBeInTheDocument();
});