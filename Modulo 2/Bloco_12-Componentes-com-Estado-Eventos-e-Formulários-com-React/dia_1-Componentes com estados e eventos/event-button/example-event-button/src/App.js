import React from 'react';
import './App.css';

function handleClickSavio() {
  console.log('Clicou em Sávio')
}

function handleClickNoah() {
  console.log('Clicou na Noah!')
}

function handleClickThor() {
  console.log('Clicou no Thorzinho!')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClickSavio}>Sávio</button>
        <button onClick={handleClickNoah}>Noah</button>
        <button onClick={handleClickThor}>Thor</button>
      </div>
    );
  }
}

export default App;
