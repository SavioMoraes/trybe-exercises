/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

let firstAngle = 50;
let secondAngle = 70;
let thirdAngle = 60;

let sumAngles = firstAngle + secondAngle + thirdAngle;

if (firstAngle > 0 && secondAngle > 0 && thirdAngle > 0) {
  if (sumAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("[ERROR!!!]")
}
