import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedbackList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {/*where is my data */}
                    {/*this page will go and talk to the reducer and get the data from state */}
                    {this.props.reduxState.feedbackReducer.map((feedback, i) => {
                        return (
                            feedback={feedback} 
                        );
                    })}
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