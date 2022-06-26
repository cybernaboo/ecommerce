import { render, screen } from '@testing-library/react';
import App from './App';
import ProductList from './ProductList';
import React from "react";

test('LinkToAdd', () => {
  render(<App/>)
  const linkElement =screen.getByText('Ajouter');
  console.log("link : ", linkElement)
 expect(linkElement)
});xs