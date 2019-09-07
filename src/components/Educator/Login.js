import React from 'react';
import { TextField } from '@material-ui/core';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        e.persist();
        this.props.handleLogin(this.state.username);
        this.setState({
            username: "",
            password: "",
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                Username:<br />
                <input type="text" onChange={this.handleChange} id="username" />
                <br />
                Password:<br />
                <input type="password" onChange={this.handleChange} id="password" />
                <br /><br />
                <button>Submit</button>
            </form>
        )
    }
}
