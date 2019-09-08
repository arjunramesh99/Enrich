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
            <div className={"classroom_panel"}>
                <div className={"classroom_list_header "}>Your Classes</div>

                <div className={"classroom_list"}>
                    {this.props.classrooms.map((classroom, index) =>
                        <Link className={"classroom_name"} replace to={"/educatorHome/" + index} >
                            # {classroom.name}
                        </Link>
                    )}
                </div>

                <form className={"new_class_form"} onSubmit={this.handleSubmit}>
                    Enter New Class ID:
                    <input className={"new_room_field"} type="text" onChange={this.handleChange} value={this.state.newClassName} id="newClassName" />
                    <button className={"submit_button"}>Create Class!</button>
                </form>
            </div>
        )
    }
}

export default ClassroomPanel;
