/*
  Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
    Desafio - 16 + 8 = 214 ;
      Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .
*/


function add(num1, num2) {
  
  num1 = ('' + num1).split('').reverse()
  num2 = ('' + num2).split('').reverse()
  let max = Math.max(num1.length, num2.length)
  let str = [];
  for(let i = 0; i < max; i++)
    str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
  num1 = str.reverse().join('');
  return parseInt(num1);
}
console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);

console.log(add(16, 18), 214);
console.log(add(26, 39), 515);
console.log(add(122, 81), 1103);

console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
console.log(add(49999, 49999), 818181818);

// solução retirada em: https://gist.github.com/hassan-maavan/99d6573d0ddd21c7ed73569b24697636


