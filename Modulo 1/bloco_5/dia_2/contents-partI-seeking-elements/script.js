// Exercício 1
document.querySelector('#elementoOndeVoceEsta');

// Exercício 2
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue';

// Exercício 3
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerHTML = 'Prazer, sou o primeiro filho!';
// se for utilizado o 'firstChild', o resultado é apresentado apenas no console, sem acrescentar texto a página do navegador

// Exercício 4
document.querySelector('#pai').firstElementChild; 

// Exercício 5
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

// Exercise 6
document.querySelector('#elementoOndeVoceEsta').nextSibling;
// se for utilizado o 'nextElementSbling' ele acessará a próxima 'div', porque busca por elementos e não por nós!

// Exercise 7
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

// Exercise 8
document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling;