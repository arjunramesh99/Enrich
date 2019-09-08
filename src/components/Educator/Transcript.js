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
            <div className={"transcript"}>
                <div style={{textAlign: "center"}}>Live Lecture Transcript</div>
                <textarea
                    className={"transcript_text"}
                    value={this.state.speechTranscript}
                    readOnly
                />
            </div>

        )
    }
}

export default Transcript;
