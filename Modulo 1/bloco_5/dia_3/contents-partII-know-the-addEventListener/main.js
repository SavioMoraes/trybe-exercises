const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//  1 - Copie esse arquivo e edite apenas ele;

//  2 - Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//criar uma constante para inserir a classe nas divs, pegando elas (divs) como filhas de um pai (div class container)
const container = document.querySelector('.container');
function addClassTech(element) {
  //criar uma variável para poder percorrer as divs filhas
  let divContainer = document.querySelector('.container');
  //percorrer as divs que são filhas da divContainer 'childElementCount'
  for (index = 0; index < divContainer.childElementCount; index += 1) {
    //fazer todas as divs que tenham alguma classe, receber valor vazio para no futuro apenasum elemento fique com a classe 'tech'
    divContainer.querySelectorAll('div')[index].className = '';
  }
  //passar através do target do elemento que for selecionado a classe 'tech'
  element.target.className = 'tech';
}
  
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// Resposta: Passando, agora já com as 'divs um, dois e três estão sem classe, um evento de clique que chama a função addClassTech, que adiciona classe tech aos elementos
container.addEventListener('click', addClassTech);

// 3 - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function changesText() {
  //pegar todos os elementos com a classe tech
  let tech = document.querySelectorAll('.tech');
  //percorrer os elementos com a classe tech
  for (let index = 0; index < tech.length; index += 1) {
    //fazer o texto do elemento com tech receber o valor passado pelo input (texto)
    tech[index].innerText = input.value; 
  }
}
//adicionar um evento no input assim que a tecla for liberada com a função changeText, ou seja altera o texto
input.addEventListener('keyup', changesText);
  
// 4 - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1 - Que tal redirecionar para seu portifólio?
function redirectToSomePages(event) {
  //abrir a pagina setada por parâmetro
  window.open('https://SavioMoraes.github.io/');
}
//adicionar evento de duplo click ao elemento mySpotrybefy que contem o texto 'Meu top 3 do Spotrybe'
myWebpage.addEventListener('dblclick', redirectToSomePages);

// 5 - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function changeTheColor(event) {
  let newColor = 'rgba(255, 0, 0, 0.7)';
  event.target.style.color = newColor;
}
myWebpage.addEventListener('mouseover', changeTheColor);
// Segue abaixo um exemplo do uso de event.target:

/*
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
*/
