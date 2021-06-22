import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso nenhum email ainda tenha sido enviado.', () => {
  const EMAIL_USER = '';
  const { queryByText } = render(<ValidEmail email={EMAIL_USER} />);
  const noMessage = queryByText('Email Inválido');
  expect(noMessage).toBeInTheDocument();
})