import React from "react";
import Avatar from './Avatar.js'

import "./ChatMessage.css";


function ChatMessage(props) {
    const user = props.user;
    const body = props.body;
    const messageType = props.messageType;

    return (
    <div className={ messageType === 'sent' ? 'sent-message' : 'chat-message'}>
        <span className="username">{user.username}</span>
        <div class="sameLine">
        <Avatar src={user.avatar} />
    <div className="bubbleContainer">
    <div className="message">
        {body}
        </div>
        <img className="icon" src={ messageType === 'sent' ? '/assets/tip-sent.svg' : '/assets/tip-received.svg' } />
        </div>
    </div>
    </div>
    )
}

export default ChatMessage;