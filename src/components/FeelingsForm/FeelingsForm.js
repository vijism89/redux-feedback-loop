import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from "react-router";

class FeelingsForm extends Component {

feedbackChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    //this.props.reduxState.feedbackReducer.feelings=event.target.value;
 // TODO: Dispatch here
        this.props.dispatch({type: 'UPDATE_FEELING', payload:event.target.value});
}

    render(){
        return(
            <div>
            <h3>How are you feeling today?</h3>
            <form>
            <label>Feeling?</label>
            <br></br>
             <select onChange={this.feedbackChange} name="feedback">
             <option value="0"> SELECT </option>
             <option value="1"> 1 </option>
             <option value="2"> 2 </option>
             <option value="3"> 3 </option>
             <option value="4"> 4 </option>
             <option value="5"> 5 </option>
             </select>
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

export default withRouter(connect(mapReduxStateToProps)(FeelingsForm));