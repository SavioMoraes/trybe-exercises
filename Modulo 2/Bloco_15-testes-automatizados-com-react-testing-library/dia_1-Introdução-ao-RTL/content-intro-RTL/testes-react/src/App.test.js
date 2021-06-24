import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Testa aexistência do componente App', () => {
  const { getByText } = render(<App />);
  const existApp = getByText(/Olá eu sou o App/i);
  expect(existApp).toBeInTheDocument();
})
