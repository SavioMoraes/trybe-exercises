/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let testGrade = 100;

if (testGrade > 100) {
  console.log('[ERROR!!]')
} else if (testGrade >= 90) {
  console.log('A')
} else if (testGrade >= 80) {
  console.log('B')
} else if (testGrade >= 70) {
  console.log('')
} else if (testGrade >= 60) {
  console.log('D')
} else if (testGrade >= 50) {
  console.log('E')
} else if (testGrade < 50) {
  console.log('F')
} if (testGrade < 0) {
  console.log('[ERROR!!]')
}