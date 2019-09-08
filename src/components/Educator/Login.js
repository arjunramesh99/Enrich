import React from 'react';
import '../../styles/infoForm.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
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

    handleReturn(e) {
        e.preventDefault();
        window.history.back();
    }

    render() {
        console.log(this.props);
        return(
            <div className={"form-block w-form"}>
                <div className={'login_header'}>Educator Access</div>
                <form className={'info-form'} onSubmit={this.handleSubmit}>
                    <label htmlFor={"username"} className={"field-label"}>Username</label>
                    <input className={'text-field w-input'} type="text" onChange={this.handleChange} id="username" />

                    <label htmlFor={"password"} className={"field-label"}>Password</label>
                    <input className={'text-field w-input'} type="password" onChange={this.handleChange} id="password" />

                    <button className={"login-button"}>Login</button>
                    <a onClick={this.handleReturn} className={"field-label"} href={"#"}>Back</a>
                </form>
            </div>
        )
    }
}
