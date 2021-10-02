function calcularDivisao(num1, num2) {
  if(num2 == 0) throw new Error('Não pode ser feito uma divisão por zero!');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(25, 5);
  console.log("resultado: %s", resultado);
} catch(excecao) {
  console.log("erro: %s", excecao.message);
}

module.exports = { calcularDivisao };

// Error: O construtor de Error cria um objeto de erro. Instâncias de objetos Error são lançadas quando erros de tempo de execução ocorrem. O objeto Error também pode ser usado como objeto base para exceções definidas pelo usuário.

// throw: A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.