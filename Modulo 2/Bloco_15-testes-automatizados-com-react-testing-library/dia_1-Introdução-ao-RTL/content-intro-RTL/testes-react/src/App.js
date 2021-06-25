import React from 'react';
import ValidEmail from './components/ValidEmail';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail(value) {
    console.log(value);
    this.setState({
      email: value,
    });
  }

  changeSaveEmail(value) {
    this.setState({
      saveEmail: value,
      email: '',
    });
  }
  
  render() {
    const { email, saveEmail } = this.state;
    return(
      <div className="App">
        <h2 className="App-header">Olá eu sou o App</h2>
        <label htmlFor="id-email">
          Email
          <input
            type="email"
            id="id-email"
            value={ email }
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          type="button"
          id="btn-enviar"
          value="Enviar"
          data-testid="id-send"
          onClick={ (() => this.changeSaveEmail(email)) }
        />
        <input
          type="button"
          id="btn-id"
          value="Voltar"
        />
        <ValidEmail email={saveEmail}/>
      </div>
    )
  }
}

export default App;
