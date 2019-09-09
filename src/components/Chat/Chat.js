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
            messages: [],
        }
        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator,
            userId: 'Student',
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        });
        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
                roomId: '204a4414-cb18-4914-9bef-c00e38d6ae45',
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
            roomId: '204a4414-cb18-4914-9bef-c00e38d6ae45'
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
