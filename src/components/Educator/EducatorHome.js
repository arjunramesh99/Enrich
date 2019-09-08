import React from 'react';
import ClassroomPanel from "./ClassroomPanel";
import CurrentClass from "./CurrentClass";
import '../../styles/educatorHome_styles.css'

export default class EducatorHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            educator: this.props.firebase_root.child(this.props.loggedInEducatorID),
            classrooms: []
        };
    }

    componentDidMount() {
        this.props.firebase_root.on('value', snap => {
            const educator_list = snap.val();
            const educator = educator_list[this.props.loggedInEducatorID];
            if(educator.hasOwnProperty('classes')) {
                this.setState({
                    classrooms: [...Object.values(educator.classes)],
                })
            }
        })
    }

    render() {
        return (
            <div className={"educator_home"}>
                <ClassroomPanel {...this.state} setActiveClassroom={this.setActiveClassroom} />
                <CurrentClass
                    classrooms={this.state.classrooms}
                    match={this.props.match}
                    firebase_root={this.props.firebase_root}
                />
            </div>
        )
    }
}


