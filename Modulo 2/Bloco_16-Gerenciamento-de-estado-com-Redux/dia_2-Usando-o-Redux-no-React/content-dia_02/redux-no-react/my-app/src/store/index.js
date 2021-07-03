import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index.js'; // colocar só a pasta reducers já bastaria, pois quando não é passado o arquivo o sistema reconhece o index por default.

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;