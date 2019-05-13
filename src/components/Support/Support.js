import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackList from '../FeedbackList/FeedbackList';

class Support extends Component {

changePage = () => {
    this.props.history.push('/comment');
}
    

feedbackChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    //this.props.reduxState.feedbackReducer.feelings=event.target.value;
 // TODO: Dispatch here
        this.props.dispatch({type: 'UPDATE_SUPPORT', payload:event.target.value});
}

    render(){
        return(
            <div>
                <h3>How well are you being supported?</h3>
            
            <label>Support?</label>
            <br></br>
             <select onChange={this.feedbackChange} name="feedback">
             <option value="0"> SELECT </option>
             <option value="1"> 1 </option>
             <option value="2"> 2 </option>
             <option value="3"> 3 </option>
             <option value="4"> 4 </option>
             <option value="5"> 5 </option>
             </select>
             <button onClick={this.changePage}>NEXT</button>
             <br></br>
             <h3>Review Your Feedback </h3>
             {/* appending my feedbacklist only in the pages where i want*/}
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

export default connect(mapReduxStateToProps)(Support);