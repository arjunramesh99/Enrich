import React from 'react';

class Transcript extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            speechTranscript: ""
        }
    }

    componentDidMount() {
        this.props.firebase_root.child('speech').on('value', snap => {
            this.setState({
                speechTranscript: snap.val()
            });
        })
    }

    render() {
        return (
            <textarea
                className={"transcript"}
                value={this.state.speechTranscript}
                readOnly
            />
        )
    }
}

export default Transcript;
