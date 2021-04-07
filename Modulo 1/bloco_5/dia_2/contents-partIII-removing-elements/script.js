// // Exercício 1 - parte I
console.log(document.querySelector('#elementoOndeVoceEsta'));

// Exercício 2 - parte I
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue');

// Exercício 3 - parte I
console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerHTML = 'Prazer, sou o primeiro filho!');
// se for utilizado o 'firstChild', o resultado é apresentado apenas no console, sem acrescentar texto a página do navegador

// Exercício 4 - parte I
console.log(document.querySelector('#pai').firstElementChild); 

// Exercício 5 - parte I
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// Exercise 6 - parte I
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
// se for utilizado o 'nextElementSbling' ele acessará a próxima 'div', porque busca por elementos e não por nós!

// Exercise 7 - parte I
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// Exercise 8 - parte I
console.log(document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling);

// Exercício 1 - parte II
let brother = document.createElement('div');
let pai = document.querySelector('#pai');
pai.appendChild(brother);
brother.className = 'new-brother';
brother.innerText = 'Eu sou o novo brother!'
// console.log(pai.appendChild(brother));
console.log(pai);
console.log(brother);

// Exercício 2 - parte II
let ondeVoceestaJr = document.createElement('p');
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(ondeVoceestaJr);
ondeVoceestaJr.className = 'ondeVoceEstaJr';
ondeVoceestaJr.innerText = 'Olá, eu sou filho do elementoOndeVoceEsta!';

// Exercício 3 - parte II
let bisnetoDoPai = document.createElement('h4');
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(bisnetoDoPai);
bisnetoDoPai.className = 'bisnetoDoPai';
bisnetoDoPai.innerText = "Eu sou o bisneto do pai kkkkk"

// Exercício 4 - parte II
console.log(document.querySelector('.bisnetoDoPai').parentNode.parentNode.nextElementSibling);

// Exercício parte III
// Permanesce 'pai', 'elementoOndeVoceEsta' e 'primeiroFilhoDoFilho'
let quartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
let terceiroFilho = document.querySelector('#terceiroFilho');
let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
let primeiroFilho = document.querySelector('#primeiroFilho');
let paiDopai = document.querySelector('#paiDoPai');


let removeBrother = pai.removeChild(brother);
let removeQuartoEUltimoFilho = pai.removeChild(quartoEUltimoFilho);
let removeTerceiroFilho = pai.removeChild(terceiroFilho);
let removeOndeVoceEstaJr = elementoOndeVoceEsta.removeChild(ondeVoceestaJr);
let removeSegundoEUltimoFilhoDoFilho = elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);
let removeBisnetoDoPai = primeiroFilhoDoFilho.removeChild(bisnetoDoPai);
let removePrimeiroFilho = pai.removeChild(primeiroFilho);

document.body.className = 'body';
document.body.appendChild(pai);
document.body.removeChild(paiDopai);

