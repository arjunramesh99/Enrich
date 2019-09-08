import React from 'react';
import '../../styles/studentHome_styles.css'
import Chat from "../Chat/Chat";
import Transcript from "../Educator/Transcript";

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
            <div className={"current_class_parent"}>
                <Chat />
                <div className={"right_third"}>
                    <div className={"learning_ratio_monitor_container"}>
                        <div className={"heading_1"}>Learning Status</div>
                        <div className={"learning_ratio_monitor"}>
                            <button
                                href="#"
                                className={"learningStateButton"}
                                style={{backgroundColor: this.state.ls ? 'lime' : 'red'}}
                                onClick={this.handleClick}
                            >
                                <div>
                                    <b>{this.state.ls ? 'I understand!' : "I don't understand.."}</b>
                                    <br/><br/><br/>*Click to toggle*
                                </div>
                            </button>
                        </div>
                    </div>
                    <Transcript firebase_root={this.props.firebase_root} />
                </div>
            </div>
        )
    }
}
