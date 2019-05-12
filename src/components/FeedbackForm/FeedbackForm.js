import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedbackForm extends Component {
    render(){
        return(
            <div>
            <form>
            <label>Feeling?</label>
            <br></br>
             <select name="feedback">
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

export default connect(mapReduxStateToProps)(FeedbackForm);