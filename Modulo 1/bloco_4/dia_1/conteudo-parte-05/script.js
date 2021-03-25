let testGrade = 100;
//let testGrade = 75;
//let testGrade = 40;

let candidatePerson;

if (testGrade >= 80) {
  candidatePerson = 'aprovado(a)'
} else if (testGrade < 80 && testGrade >= 60) {
  candidatePerson = 'lista'
} else {
  candidatePerson = 'reprovado'
}

switch (candidatePerson) {
  case 'aprovado(a)':
    console.log('Parabéns você foi aprovado(a)') ;  
    break;

  case 'lista':
    console.log('Você está na lista de espera');
    break;

  case 'reprovado':
    console.log('Você foi reprovado(a)');
    break;

  default:
    console.log('não se aplica');
    break;
}

/*
1-Crie uma variável para armazenar o estado da pessoa candidata ao processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

2-Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
*/