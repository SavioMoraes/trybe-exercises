function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
  }
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
/*
  Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
    -Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>

    -Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
    
    -Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
*/
let dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let dezDaysList = document.querySelector('#days');
function insertMonthDays() {
  for (let index = 0; index < dezDays.length; index += 1) {
    let day = dezDays[index];
    let dezListIem = document.createElement('li');
    if (day === 24|| day === 31) {
      dezListIem.className = 'day holiday';
      dezListIem.innerHTML = day;
      dezDaysList.appendChild(dezListIem);
    } else if (day === 4 || day === 11 || day === 18) {
      dezListIem.className = 'day friday';
      dezListIem.innerHTML = day;
      dezDaysList.appendChild(dezListIem); 
    } else if (day === 25) {
      dezListIem.className = 'day holiday friday';
      dezListIem.innerHTML = day;
      dezDaysList.appendChild(dezListIem);
    } else {
      dezListIem.className = 'day';
      dezListIem.innerHTML = day;
      dezDaysList.appendChild(dezListIem);
    }
    
  }
}
insertMonthDays();

/*
  Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

    -Adicione a este botão a ID "btn-holiday" .
  
    -Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createButtonsHoliday(str) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  let buttonHolidayID = 'btn-holiday';
  buttonHoliday.innerHTML = str;
  buttonHoliday.id = buttonHolidayID;  
  buttonsContainer.appendChild(buttonHoliday);
}
createButtonsHoliday('Feriados');

/*
  Exercício 3: Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

    -É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
function addEventClickInButtonHoliday() {
  let getButtonHoliday = document.querySelector('#btn-holiday');
  let getHolydays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getButtonHoliday.addEventListener('click', function() {
    for (let index = 0; index < getHolydays.length; index += 1) {
      if (getHolydays[index].style.backgroundColor === setNewColor) {
        getHolydays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolydays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
addEventClickInButtonHoliday();

/*
  Exercício 4: Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

    -Adicione a este botão o ID "btn-friday" .

    -Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createFridayButton(str) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let newButtonFriday = document.createElement('button');
  let newButtonFridayId = 'btn-friday';

  newButtonFriday.innerHTML = str;
  newButtonFriday.id = newButtonFridayId;
  buttonsContainer.appendChild(newButtonFriday);
}
createFridayButton('Sexta-Feira');

/*
  Exercício 5: Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

    -É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';
  
  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
}
let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

/*
  Exercício 6: Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

/*
  Exercício 7: Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    -O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');