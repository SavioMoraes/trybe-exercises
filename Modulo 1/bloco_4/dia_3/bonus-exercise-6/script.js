let number = 73;
let primo = true;

if (number < 1) {
  console.log('O programa solicita númroa a partir de 2');
} else {
  for (let index = 2; index < number; index += 1){
    if (number % index === 0) {
      primo = false;
      break;
    }
  }

  if (primo === true) {
    console.log(`O numero ${number} é primo`);
  } else {
    console.log(`O numero ${number} não é primo`);
  }
}