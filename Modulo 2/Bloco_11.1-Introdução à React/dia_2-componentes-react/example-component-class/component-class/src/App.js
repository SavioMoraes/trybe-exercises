import React from 'react';
import ComponentClass from './components/ComponentClass';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentClass name={ 'Vera' } />
      </div>
    );
  }
}

export default App;
