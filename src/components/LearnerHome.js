import React from 'react';
import '../styles/studentHome_styles.css'

export default class LearnerHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student_ref: this.props.curr_classroom.child('students/student 1'),
            ls: 0
        };



        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const ref = this.props.curr_classroom.child('students/student 1');
        ref.once("value", snap => {
            this.setState(
                {ls:snap.val().ls}
            )
        });
    }

    handleClick(e) {
        this.setState(curr_state => {
            return {
                ls: !curr_state.ls
            }
        },
            () => {
                this.state.student_ref.update({ls: this.state.ls});
            });

    }


    render() {
        return (
            <div>
                <button
                    href="#"
                    className={"learningStateButton"}
                    style={{backgroundColor: this.state.ls ? 'lime' : 'red'}}
                    onClick={this.handleClick}
                > </button>
            </div>
        )
    }
}
