// COLOQUE SEU CÓDIGO AQUI
// Exercícios

// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let title = document.createElement('h1');
let body = document.querySelector('body');
body.appendChild(title);
title.innerText = 'Exercício 5.2 - JavaScript DOM';

// 2 - Adicione a tag div com a classe main-content como filho da tag body;
let mainContent = document.createElement('div');
body.appendChild(mainContent);
mainContent.className = 'main-content';

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
mainContent.appendChild(centerContent);
centerContent.className = 'center-content';

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let text = document.createElement('p');
centerContent.appendChild(text);
text.innerText = 'Vamos que vamos!';

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
mainContent.appendChild(leftContent);
leftContent.className = 'left-content';

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
mainContent.appendChild(rightContent);
rightContent.className = 'rigth-content';

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let image = document.createElement('img');
leftContent.appendChild(image);
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let orderedList = document.createElement('ol');
orderedList.className = 'orderedlist';
rightContent.appendChild(orderedList);
let list = [
  'One',
  'two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Height',
  'Nine',
  'Ten'
];

for (index = 0; index < list.length; index += 1) {
  let item = list[index];

  let listItem = document.createElement('li');
  listItem.innerText = item;
  listItem.className = 'listItem';

  orderedList.appendChild(listItem);
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let firstH3 = document.createElement('h3');
let secondH3 = document.createElement('h3');
let thirdH3 = document.createElement('h3');

mainContent.appendChild(firstH3);
mainContent.appendChild(secondH3);
mainContent.appendChild(thirdH3);

// Alterações e Remoções
// 1 - Adicione a classe title na tag h1 criada;
title.className = 'title';

// 2 - Adicione a classe description nas 3 tags h3 criadas;
firstH3.className = 'description'; 
secondH3.className = 'description';
thirdH3.className = 'description';

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
let removeLeftContent = mainContent.removeChild(leftContent);

// 4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
rightContent.style.marginRight = 'auto';

// 5 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
mainContent.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let listItens = document.querySelectorAll('.listItem');
for (let index = 0; index < listItens.length; index += 1) {
  let removeItem = listItens[index];
  if (listItens[index] === listItens[8] || listItens[index] === listItens[9]) {
    orderedList.removeChild(removeItem);
  }
}