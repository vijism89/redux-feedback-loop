import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
// Redux stuff
import { connect } from 'react-redux';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackList from '../FeedbackList/FeedbackList';

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <FeedbackForm />
          <FeedbackList />
        </div>
    
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(App);
