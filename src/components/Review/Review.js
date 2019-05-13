import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {


    changePage = () => {
        //spreading the values the we entered in to the object
        let feedbackObject = {
            ...this.props.reduxState.feedbackReducer
        }
        axios.post('/feedback',feedbackObject)
        .then( response => {
          console.log(response.data);
          });
          //clearing my values after posting it in the server
        this.props.dispatch({type: 'NEW_FEEDBACK', payload:''});
        //path to my next page
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <ul>
                    {/*this page will go and talk to the reducer and get the data from state */}
                        <div >
                            <p>Feelings: {this.props.reduxState.feedbackReducer.feelings}</p>
                            <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                            <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                            <p>Comment: {this.props.reduxState.feedbackReducer.comment}</p> 
                            <div>
                                {/* Checking the values and enabling my disable button to submit*/}
                                <input type="button" disabled={ (this.props.reduxState.feedbackReducer.feelings!==0 
                                && this.props.reduxState.feedbackReducer.understanding!==0 
                                && this.props.reduxState.feedbackReducer.support!==0 
                                && this.props.reduxState.feedbackReducer.comment!=="")? "" :"disabled"} 
                                value={(this.props.reduxState.feedbackReducer.feelings!==0 
                                && this.props.reduxState.feedbackReducer.understanding!==0 
                                && this.props.reduxState.feedbackReducer.support!==0
                                && this.props.reduxState.feedbackReducer.comment!=="")? "SUBMIT" :"INCOMPLETE"} 
                                onClick={this.changePage}></input>
                            </div>
                        </div>
                </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    //shortcut for (reduxstate :reduxstate)
    return {
        reduxState
    }
}

export default connect(mapReduxStateToProps)(Review);