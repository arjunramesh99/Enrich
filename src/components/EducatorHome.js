import React from 'react'

export default class EducatorHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students_ref: this.props.curr_classroom.child('students'),
            ts: null
        };

        // in the process of retrieving all student data to render the learning status color
    }
}
