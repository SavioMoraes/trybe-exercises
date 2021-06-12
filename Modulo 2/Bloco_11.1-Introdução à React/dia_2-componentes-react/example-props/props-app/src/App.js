import React from 'react';
import Greeting from './components/Greeting';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name="Samuel" lastName="Silva" />
      </main>
    );
  }
}

export default App;
