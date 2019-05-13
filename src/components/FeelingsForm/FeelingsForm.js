import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import FeedbackList from '../FeedbackList/FeedbackList';
import '../App/App.css';
import Button from '@material-ui/core/Button';

class FeelingsForm extends Component {

changePage = () => {
//navigating to the next page
    this.props.history.push('/understanding');
}

feedbackChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    // TODO: Dispatch here to update the newvalue
        this.props.dispatch({type: 'UPDATE_FEELING', payload:event.target.value});
}

    render(){
        return(
            <>
            <div className= "formStyle">
            <h3>How are you feeling today?</h3>
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
             <Button className="button1" onClick={this.changePage}> NEXT </Button>
             </div>
             <br></br>
             <div className= "review">
             <h3>Review Your Feedback </h3>
             {/* appending my feedbacklist only in the pages where i want*/}
             <FeedbackList />
             </div>
           </>
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