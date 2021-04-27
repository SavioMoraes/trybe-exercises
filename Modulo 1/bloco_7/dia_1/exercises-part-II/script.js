// Exercício 1 - Fatorial

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5))

// Exercício 1 - Bônus - Recursiva

const factorial = number => number > 1 ? number * factorial(number - 1) : 1 // ?
console.log(factorial(5));

// Exercício 2 - Longestword

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Exercício 2 - Longestword com sort em uma linha...

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]; // ?

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Exercício 3 - arquivo index.html

// Exercício 4 - ?

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result;
}

console.log(buildSkillsPhrase("Lucas"));

