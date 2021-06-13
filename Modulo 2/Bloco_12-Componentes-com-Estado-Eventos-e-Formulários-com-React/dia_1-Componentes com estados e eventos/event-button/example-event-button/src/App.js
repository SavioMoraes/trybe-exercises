import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroDeCliquesSavio: 0,
      numeroDeCliquesNoah: 0,
      numeroDeCliquesThor: 0,
    }

    this.handleClickSavio = this.handleClickSavio.bind(this);
    this.handleClickNoah = this.handleClickNoah.bind(this);
    this.handleClickThor = this.handleClickThor.bind(this);
  }
  
  handleClickSavio() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesSavio: estadoAnterior.numeroDeCliquesSavio + 1
    }))
  }

  handleClickNoah() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesNoah: estadoAnterior.numeroDeCliquesNoah + 1
    }))
  }

  handleClickThor() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesThor: estadoAnterior.numeroDeCliquesThor + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickSavio}>{this.state.numeroDeCliquesSavio}</button>
        <button onClick={this.handleClickNoah}>{this.state.numeroDeCliquesNoah}</button>
        <button onClick={this.handleClickThor}>{this.state.numeroDeCliquesThor}</button>
      </div>
    );
  }
}

export default App;
