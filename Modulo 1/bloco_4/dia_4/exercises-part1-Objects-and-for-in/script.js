/*Usando o objeto abaixo, faça os exercícios a seguir:*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida*/

console.log(`Bem vinda, ${info.personagem}`)

/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
Valor esperado no console:
  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  */

info['recorrente'] = 'Sim';
console.log(info);
/* 3 - Faça um for/in que mostre todas as chaves do objeto.
Valor esperado no console:
  personagem
  origem
  nota
  recorrente
*/

for (let index in info) {
  console.log(index);
}

/* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
Valor esperado no console:
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
  */

for (let index in info) {
  console.log(info[index]);
}

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
Valor esperado no console:
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha (fazer um if que retorne true e escreva 1ambaos recorrentes!)
*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
let infoUncle = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
let recorrentes = '';
if (info.recorrente === infoUncle.recorrente) {
  recorrentes = 'Ambos recorrentes';
}
console.log(`${info.personagem} e ${infoUncle.personagem}`);
console.log(`${info.origem} e ${infoUncle.origem}`);
console.log(`${info.nota} e ${infoUncle.nota}`);
console.log(`${recorrentes}`);