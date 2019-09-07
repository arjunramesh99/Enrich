import React from 'react';

export default class EnterRoom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            learner_name: "",
            educator_name: "",
            room_id: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Enter a Classroom</h2>
                Full Name:<br />
                <input type="text" onChange={this.handleChange} id="learner_name" />
                <br />
                Professor Name:<br />
                <input type={"text"} onChange={this.handleChange} id={"educator_name"} />
                Room ID:<br />
                <input type="text" onChange={this.handleChange} id="room_id" />
                <br /><br />
                <button>Submit</button>
            </form>
        )
    }
}
