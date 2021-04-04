/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

function chessPiecesMovements(chosenPiece) {

  let king = 'Uma única casa em qualquer direção';
  let queen = 'Quantas casas quiser na horizontal, vertical ou em diagonal';
  let bishop = 'Quantas casas quiser em diagonal';
  let horse = 'Movimentos em L';
  let tower = 'Quantas casas quiser na vertical ou na horizontal';
  let pawn = 'Uma casa por vez na vertical e nas diagonais superiores para ganhar a peça do adversário';
  
  if (chosenPiece.toLowerCase() === 'rei') {
    console.log(king);
  } else if (chosenPiece.toLowerCase() === 'rainha') {
    console.log(queen);
  } else if (chosenPiece.toLowerCase() === 'bispo') {
    console.log(bishop);
  } else if (chosenPiece.toLowerCase() === 'cavalo') {
    console.log(horse);
  } else if (chosenPiece.toLowerCase() === 'torre') {
    console.log(tower);
  } else if (chosenPiece.toLowerCase() === 'peão') {
    console.log(pawn);
  } else if (chosenPiece.toLowerCase() === 'peao') {
    console.log(pawn);
  } else {
    console.log('[ERORR!]');
  }
}
