import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
// Redux stuff
import { connect } from 'react-redux';
//import { withRouter} from "react-router";
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingsForm from '../FeelingsForm/FeelingsForm';
import FeedbackList from '../FeedbackList/FeedbackList';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route exact path ='/' component = {FeelingsForm} />
          <Route exact path ='/understanding' component = {Understanding} />
          <Route exact path ='/support' component = {Support} />
          <Route exact path ='/comment' component = {Comment} />
         {/* <FeelingsForm />
          <Understanding />
          <Support />
          <Comment />
          */}
          <FeedbackList />
        </div>
        </Router>
    
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(App);
