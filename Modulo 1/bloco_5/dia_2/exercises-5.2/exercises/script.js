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

// let orderedList = document.createElement('ol');
// rightContent.appendChild(orderedList);
// let list = document.createElement('li');
// orderedList.appendChild(list);
// list[0].innerText = 'One';
// list[1].innerText = 'Two';
// list[2].innerText = 'Three';
// list[3].innerText = 'Four';
// list[4].innerText = 'Five';
// list[5].innerText = 'Six';
// list[6].innerText = 'Seven';
// list[7].innerText = 'Eight';
// list[8].innerText = 'Nine';
// list[0].innerText = 'Ten';

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let firstH3 = document.createElement('h3');
let secondH3 = document.createElement('h3');
let thirdH3 = document.createElement('h3');

mainContent.appendChild(firstH3);
mainContent.appendChild(secondH3);
mainContent.appendChild(thirdH3);


