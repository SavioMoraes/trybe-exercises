import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key="{value}">{value}</li>
  );
}

const tarefas = [
  'Acordar',
  'Tomar café',
  'Escovar os dentes',
  'Ir trabalhar',
];

class App extends Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
