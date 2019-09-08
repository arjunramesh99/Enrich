import React from 'react';
import '../../styles/studentHome_styles.css'

export default class LearnerHome extends React.Component {
    constructor(props) {
        super(props);

        const {studentID, professorID, roomID} = this.props.studentClassroomInfo;
        this.state = {
            studentRef: this.props.firebase_root.child(
                `${professorID}/classes/${roomID}/students/${studentID}`
            ),
            ls: 1
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e) {
        this.setState(curr_state => {
            return {
                ls: !curr_state.ls
            }
        },() => {
                this.state.studentRef.update({ls: this.state.ls});
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
