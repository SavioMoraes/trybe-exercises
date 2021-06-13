import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('componene sendo construído');

    this.handleClickSavio = this.handleClickSavio.bind(this);
    this.handleClickNoah = this.handleClickNoah.bind(this);
    this.handleClickThor = this.handleClickThor.bind(this);
  }
  
  handleClickSavio() {
    // console.log(this);
    console.log('Clicou em Sávio')
  }
  
  handleClickNoah() {
    // console.log(this);
    console.log('Clicou na Noah!')
  }
  
  handleClickThor() {
    // console.log(this);
    console.log('Clicou no Thorzinho!')
  }

  render() {
    // console.log(this);
    return (
      <div>
        <button onClick={this.handleClickSavio}>Sávio</button>
        <button onClick={this.handleClickNoah}>Noah</button>
        <button onClick={this.handleClickThor}>Thor</button>
      </div>
    );
  }
}

export default App;
