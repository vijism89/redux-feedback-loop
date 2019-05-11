import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//list of objects 
const feebackList = [
  {feelings: 0 },
  {understanding: 0 },
  {support: 0 },
  {cooment: ''},
];




const storeInstance = createStore(
    combineReducers({
        
    }),
    applyMiddleware(logger),
);
//Connecting to store
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
