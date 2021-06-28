import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// A const 'joke' inserida no teste é o objeto json retornado pela chamada a // API de piadas, e, como sabemos isso, para simular um teste assíncrono, ///// passamos essa constante dentro do teste, que está recebendo no segundo // // parâmetro uma função anônima assíncrona com o async.

afterEach(() => jest.clearAllMocks());
it('verifica que, quando recebe uma piada, mostra ela na tela', async () => {
  const joke = {
    id: '7h3oGtr0fxc',
    joke: 'Whiteboards... are remarkable.',
    status: 200,
  };

  // Estrutura Normal:
  /*
  const response = { json: jest.fn().mockResolvedValue(joke) }
  global.fetch = jest.fn().mockResolvedValue(response);
  */

  // Estrutura Concatenada:
  jest.spyOn(global, 'fetch')
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  const { findByText } = render(<App />);
  await findByText('Whiteboards... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { 'headers': { 'Accept': 'application/json' } }
  );
});

// O findBy é assincrono, utilizá-lo seria a mesma coisa de utilizar o getBy,
// porém com o auxílio do waitFor. Desestruturando o waitFor depois da //////// desestruturação do render englobando a chamada a getBy no waitFor:
// `await waitFor(getByText('Whiteboards... are remarkable.'))
