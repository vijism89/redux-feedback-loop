import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedbackList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {/*where is my data */}
                    {/*this page will go and talk to the reducer and get the data from state */}
                        <div >
                            <p>Feelings: {this.props.reduxState.feedbackReducer.feelings}</p>
                            <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                            <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                            <p>Comment: {this.props.reduxState.feedbackReducer.comment}</p> 
                            <div>
                                <input type="button" disabled = "disabled" value = "INCOMPLETE"></input>
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

export default connect(mapReduxStateToProps)(FeedbackList);