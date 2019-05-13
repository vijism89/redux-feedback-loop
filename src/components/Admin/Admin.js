import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import FeedbackItem from '../FeedbackItem/FeedbackItem.js';


class Admin extends Component {
    state = {
        feedback: []
    }

    componentDidMount() {
        this.getFeedback();
    }
    getFeedback = () => {
        // just like $.ajax()
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                feedback: response.data
            });
        }).catch(error => {
            console.log('error in axios:', error)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h1> Feedback Results! </h1>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Get info from the database and map it here. */}
                        {this.state.feedback.map((feedbackItem) => {
                            return <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} getFeedback={this.getFeedback} />
                        })}
                    </TableBody>
                </Table>
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

export default withRouter(connect(mapReduxStateToProps)(Admin));