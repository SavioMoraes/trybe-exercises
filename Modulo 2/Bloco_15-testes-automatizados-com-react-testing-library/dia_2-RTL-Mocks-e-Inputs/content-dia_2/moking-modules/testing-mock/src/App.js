// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  // Exemplo de requisição assíncrona utilizando o 'then'
  /*
  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        return this.setState({ joke: data.joke })
      }
 )}
 */

  // Exemplo de requisição Assincrona utilizando o 'async / await'

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json'} });
    const data = await response.json();

    this.setState({
      joke: data.joke
    })
  }

  // Exemplo mais usual, desestruturando a chave passada no state com o this // state e apenas chamando essa chave no render.
  
  render() {
    const { joke } = this.state;
    return (
      <div className="App" data-testid="joke-element">
        { joke }
      </div>
    );
  }

  /**
   * Exemplo de uso do stado sendo passado direto com o this dentro da div 
   * 
   // render() {
   //   // console.log(this);
   //   return (
   //     <div className="App">
   //       {this.state.joke}
   //     </div>
   //   );
   // }
   * 
   */
}

export default App;