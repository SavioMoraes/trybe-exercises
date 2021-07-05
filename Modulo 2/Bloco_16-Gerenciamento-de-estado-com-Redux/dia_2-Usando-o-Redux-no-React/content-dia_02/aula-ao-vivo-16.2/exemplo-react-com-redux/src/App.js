import { Provider } from 'react-redux' //pode ser aqui ou no index.js principal
import './App.css';
import Title from './components/Title';
import List from './components/List';
import Todo from './components/Todo';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider>
        <Title />
        <Todo  store={ store }/>
        <List />
      </Provider>
    </div>
  );
}

export default App;
