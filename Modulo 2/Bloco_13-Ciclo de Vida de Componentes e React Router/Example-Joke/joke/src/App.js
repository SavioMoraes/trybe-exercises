import React from 'react';
import DadJoke from './DadJoke';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DadJoke />
        <Counter />
      </div>
    );
  }
}

export default App;
