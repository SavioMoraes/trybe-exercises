import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

  it('Verifica que há dois botões', () => {
    // Acessar os elementos de sua tela
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');

    // Interagir com eles (se houver necessidade)
      // Não houve necessidade

    // Fazer seu teste
    expect(button.length).toBe(2)
  });

  it('Verifica a existência do botão `Enviar`.', () => {
    // Acessar os elementos de sua tela
    const { getByTestId } = render(<App />);
    const btnEnviar = getByTestId('id-send');
  
    // Interagir com eles (se houver necessidade)
      // Não houve necessidade
  
    // Fazer seu teste
    expect(btnEnviar).toBeInTheDocument();
    expect(btnEnviar.type).toBe('button');
    expect(btnEnviar).toHaveValue('Enviar');
  });
  
  it('Verifica se, ao inserir um email e clicar em "Enviar", o email aparece na tela.', () => {
    // Acessar os elementos de sua tela
    const { getByTestId, getByLabelText } = render(<App />);

    const EMAIL_USER = 'email@email.com';

    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');
  
    // Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: { value: EMAIL_USER } });
    fireEvent.click(sendButton);
    
    // Fazer seu teste
    expect(userEmail).toBeInTheDocument();
    expect(userEmail).toHaveTextContent('Valor:');
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe(`Valor: ${EMAIL_USER}`)
  });

});


