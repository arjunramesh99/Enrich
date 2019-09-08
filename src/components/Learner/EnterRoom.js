import React from 'react';
import '../../styles/infoForm.css'

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
        this.handleReturn = this.handleReturn.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.props);
        this.props.handleEnterRoom(this.state.learner_name, this.state.educator_name, this.state.room_id);

        this.setState({
            learner_name: "",
            educator_name: "",
            room_id: ""
        })
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleReturn(e) {
        e.preventDefault();
        window.history.back();
    }

    render() {
        return(
            <div className={"form-block w-form"}>
                <div className={'login_header'}>Enter a Room</div>
                <form className={'info-form'} onSubmit={this.handleSubmit}>
                    <label htmlFor={"learner_name"} className={"field-label"}>Name</label>
                    <input className={'text-field w-input'} type="text" onChange={this.handleChange} id="learner_name" />

                    <label htmlFor={"educator_name"} className={"field-label"}>Professor Name</label>
                    <input className={'text-field w-input'} type={"text"} onChange={this.handleChange} id={"educator_name"} />

                    <label htmlFor={"room_id"} className={"field-label"}>Room ID</label>
                    <input className={'text-field w-input'} type="text" onChange={this.handleChange} id="room_id" />

                    <button className={"login-button"}>Submit</button>
                    <a onClick={this.handleReturn} className={"field-label"} href={"#"}>Back</a>
                </form>
            </div>
        )
    }
}
