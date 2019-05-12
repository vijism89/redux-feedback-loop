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

const feedbackObject = {
  feelings: 0,
  understanding: 0,
  support: 0,
  comment: '',
};


const feedbackReducer = (state = feedbackObject, action) => {
    //if(action.type === 'UPDATE_FEELING'){
        //updating the value for feeling first 
     //   state.feelings= action.payload;
        //then spreading the state
      //  return {...state};
    //}
    switch (action.type){
         case 'UPDATE_FEELING':
        state.feelings = action.payload;
        break;
        case 'UPDATE_UNDERSTADING':
        state.understanding = action.payload;
        break;
        case 'UPDATE_SUPPORT':
        state.support = action.payload;
        break;
        case 'UPDATE_COMMENT':
        state.comment = action.payload;
        break;
        case 'NEW_FEEDBACK':
        state.feelings=0;
        state.understanding=0;
        state.support=0
        state.comment = '';
        break;
        default :
        return {...state};
        }
    return {...state};
};

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
);
//Connecting to store
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
