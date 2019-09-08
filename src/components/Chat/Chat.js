import React from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import {tokenUrl, instanceLocator} from "./config";
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import '../../styles/chat.css'

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        console.log(this.props);
        const chatManager = new ChatManager({
            instanceLocator,
            userId: 'venkata',
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        });
        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
                roomId: '4667e38d-683b-4f23-8105-eebf13b7a39c',
                hooks: {
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                    }
                }
            })
        })
    }

    sendMessage(text){
        this.currentUser.sendMessage({
            text,
            roomId: '4667e38d-683b-4f23-8105-eebf13b7a39c'
        })
    }

    render() {
        return (
            <div className="app">
                <MessageList messages={this.state.messages}/>
                <SendMessageForm sendMessage={this.sendMessage}/>
            </div>
        );
    }
}

export default Chat
