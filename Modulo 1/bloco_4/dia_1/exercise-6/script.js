/*Nome dos movimenos das peças do xadrez*/

let chosenPiece = 'Peao';

let king = 'Uma única casa em qualquer direção';
let queen = 'Quantas casas quiser reto ou em diagonal';
let bishop = 'Quantas casas quiser em diagonal';
let horse = 'Movimentos em L';
let tower = 'Movimentos em linha reta';
let pawn = 'Uma casa por vez em linha reta e em diagonal para ganhar a peça do adversário';

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