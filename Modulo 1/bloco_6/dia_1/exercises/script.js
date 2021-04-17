const states = document.querySelector('#state');
function createStateOptions() {
  const stateOptions = ['Selecione seu Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondôna', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

function checkEmail() {
  const email = document.querySelector('.email-input');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);
clearButton.addEventListener('click', clearFields);

window.onload = function () {
  createStateOptions();
}
