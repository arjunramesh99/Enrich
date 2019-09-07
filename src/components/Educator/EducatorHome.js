import React from 'react';
import '../../styles/educatorHome_styles.css'

class ClassroomPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newClassName: "",
            addedNewClass: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            newClassName: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        this.props.educator.child("classes").push({
            name: e.target[0].value
        });
        this.setState({addedNewClass: true})
    }

    render() {
        return (
            <div className={"classrooms"}>
                <p>List of current classes</p>
                {this.props.currentClassrooms.map(classroom => <li>{classroom.name}</li>)}

                <form onSubmit={this.handleSubmit}>
                    Enter New Class ID:<br />
                    <input type="text" onChange={this.handleChange} value={this.state.newClassName} id="newClassName" />
                    <button>Create Class!</button>
                </form>
            </div>
        )
    }
}

class CurrentClass extends React.Component {
    render() {
        return (
            <div className = "current-class">
                Current Class
            </div>
        )
    }
}

export default class EducatorHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            educator: this.props.firebase_root.child(this.props.loggedInEducatorID),
            currentClassrooms: []
        };

        //console.log(this.props.loggedInEducatorID);
    }

    componentDidMount() {
        this.props.firebase_root.on('value', snap => {
            const educator_list = snap.val();
            const educator = educator_list[this.props.loggedInEducatorID];
            if(educator.hasOwnProperty('classes')) {
                this.setState({
                    currentClassrooms: [...Object.values(educator.classes)],
                })
            }
        })
    }

    render() {
        return (
            <div className={"educatorHome"}>
                <ClassroomPanel {...this.state} />
                <CurrentClass />
            </div>
        )
    }
}

