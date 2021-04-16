const state = document.querySelector('#state');
function createStateOptions() {
  const statesName = ['Selecione seu Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondôna', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  const statesAcronyms = [];

  for (let index = 0; index < statesName.length; index += 1) {
    const createOptions = document.createElement('option');
    state.appendChild(createOptions).innerText = statesName[index];
    state.appendChild(createOptions).value = statesName[index];
  }
}

window.onload = function () {
  createStateOptions();
}
