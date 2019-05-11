import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedbackList extends Component {
    render(){
        return(
            <p>feedback list goes here</p>
        )
    }
}





const mapReduxStateToProps = (reduxState) => {
    //shortcut for (reduxstate :reduxstate)
    return{
      reduxState
    }
  }

export default connect(mapReduxStateToProps)(FeedbackList);