import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class Success extends Component {

    changePage = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div>
                    <h1>FEEDBACK!</h1>
                </div>
                <div>
                    <h2>Thank You!</h2>
                </div>
                <input type="submit" onClick={this.changePage} value="Leave New Feedback" />
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

export default withRouter(connect(mapReduxStateToProps)(Success));