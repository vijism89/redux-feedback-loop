import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackList from '../FeedbackList/FeedbackList';


class Comment extends Component {

changePage = () => {
    this.props.history.push('/review');
}

feedbackChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    //this.props.reduxState.feedbackReducer.feelings=event.target.value;
 // TODO: Dispatch here
        this.props.dispatch({type: 'UPDATE_COMMENT', payload:event.target.value});
}
render(){
        return(
            <div>
                <h3>Any comments you want to leave?</h3>
            <label>Comments</label>
            <br></br>
             <input type="text" onChange={this.feedbackChange} />
             <button onClick={this.changePage}> NEXT </button>
             <br></br>
             <h3>Review Your Feedback </h3>
             <FeedbackList />
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    //shortcut for (reduxstate :reduxstate)
    return{
     reduxState
    }
  }

export default connect(mapReduxStateToProps)(Comment);