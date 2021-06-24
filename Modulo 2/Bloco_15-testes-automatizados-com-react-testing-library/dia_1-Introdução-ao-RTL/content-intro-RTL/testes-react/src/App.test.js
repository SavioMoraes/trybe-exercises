import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Testa a existência do componente App:', () => {

  it("Rendriza o texto 'Olá eu sou o App'." , () => {
    const { getByText } = render(<App />);
    const existApp = getByText(/Olá eu sou o App/i); // Procura pelo texto ou parte dele, para passar no teste, falha quando acha parte do texto diferentes...
    expect(existApp).toBeInTheDocument();
  });

  it('Verifica que há um input do tipo email na tela', () => {
    // Acessar os elementos de sua tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    
    // Interagir com eles (se houver necessidade)
      // Não houve necessidade
    
    // Fazer seu teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
});

// Acessar os elementos de sua tela

// Interagir com eles (se houver necessidade)

// Fazer seu teste
