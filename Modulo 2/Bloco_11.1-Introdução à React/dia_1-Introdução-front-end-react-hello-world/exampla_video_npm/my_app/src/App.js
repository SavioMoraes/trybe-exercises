import React from 'react';
import './App.css';
import Hello from './components/Hello';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>HELLO WORLD NO REACT</h1>
        <p>Agora a maldição vai por terra e vou conseguir prender essa jossa!!!</p>
        <Hello />
      </div>
    );
  }
}

export default App;
