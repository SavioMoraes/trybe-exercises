import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroDeCliques: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </div>
    );
  }
}

export default App;
