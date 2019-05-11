import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedbackForm extends Component {
    render(){
        return(
            <p>feedback form goes here</p>
        )
    }
}





const mapReduxStateToProps = (reduxState) => {
    //shortcut for (reduxstate :reduxstate)
    return{
      reduxState
    }
  }

export default connect(mapReduxStateToProps)(FeedbackForm);