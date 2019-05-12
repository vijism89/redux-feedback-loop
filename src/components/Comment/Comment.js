import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comment extends Component {

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
            <form>
            <label>Comments</label>
            <br></br>
             <input type="text" onChange={this.feedbackChange} />
             <input type="submit" value="NEXT" />
             <br></br>
             <h3>Review Your Feedback </h3>
            </form>
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