/* Confere se é triângulo a parti da soma dos ângulos internos */

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
