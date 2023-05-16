import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Header from './common/components/Header';
test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Postal Code Lookup - Demo/i);
  expect(linkElement).toBeInTheDocument();
});
