import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer.js'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { saveState, loadState } from './utils/localStorage.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const persistedState = loadState();
console.log('index.js persistedState: ', persistedState);
const store = createStore(reducer, persistedState, applyMiddleware(thunk, logger));
store.subscribe(() => {
    saveState(store.getState());
});

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
