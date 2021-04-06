let container = document.querySelector('body');
container.style.backgroundColor = 'rgba(243,243,243,255)';

let headerContainer = document.querySelector('#header-container');
headerContainer.style.backgroundColor = '#00b069';

let emergencyTasks = document.querySelector('section.emergency-tasks');
emergencyTasks.style.backgroundColor = '#ff9f84';

let noEmergencyTasks = document.querySelector('section.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#f9db5e';

let headerEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < headerEmergencyTasks.length; index += 1) {
  headerEmergencyTasks[index].style.backgroundColor = '#a500f3';
}

let headerNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < headerNoEmergencyTasks.length; index += 1) {
  headerNoEmergencyTasks[index].style.backgroundColor = '#232525';
}

let footerContainer = document.querySelector('#footer-container');
footerContainer.style.backgroundColor = '#003533';