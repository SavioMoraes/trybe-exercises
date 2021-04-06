/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:

    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
*/
// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText() {
  let visionOfMyFuture = document.getElementsByTagName('p')[1];
  visionOfMyFuture.innerHTML = 'Daqui a dois anos eu serei um desenvolvedor full stack pleno e vou estar ganhando muito bem, trabalhando numa excelente empresa em home office.';
}
changeText();

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = 'rgb(76,164,109)';
}
changeSquareToGreen();
  
// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();
  
// 4. Crie uma função que corrija o texto da tag <h1>.

function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
}
correctTitle();
  
// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();
  
// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();

