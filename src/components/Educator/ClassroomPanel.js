import React from "react";
import {Link} from "react-router-dom";

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
        this.setState({newClassName: "", addedNewClass: true})
    }

    render() {
        return (
            <div className={"classrooms"}>
                <p>List of current classes</p>
                {this.props.classrooms.map((classroom, index) =>
                    <li><Link replace to={"/educatorHome/" + index} >
                        {classroom.name}
                    </Link></li>
                )}

                <form onSubmit={this.handleSubmit}>
                    Enter New Class ID:<br />
                    <input type="text" onChange={this.handleChange} value={this.state.newClassName} id="newClassName" />
                    <button>Create Class!</button>
                </form>
            </div>
        )
    }
}

export default ClassroomPanel;
