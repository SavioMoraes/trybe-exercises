/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

function testInternalAnglesOfATriangle(firstAngle, secondAngle, thirdAngle) {
  let sumAngles = firstAngle + secondAngle + thirdAngle;
  
  if (firstAngle > 0 && secondAngle > 0 && thirdAngle > 0) {
    if (sumAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return "[ERROR!!!]";
  }
}
console.log(testInternalAnglesOfATriangle(80, -30, 60));
