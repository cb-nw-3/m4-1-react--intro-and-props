import React from 'react';
import './ChatMessage.css';

function ChatMessage(props) {
    console.log("ChatMessage props", props);
    return (
    <div className="chat-message">
        <div className="username">{props.message.user.username}</div>

        <span><img className="avatar" src={props.message.user.avatar}></img></span>
        <span className="bodyMessage">{props.message.body}</span>
        </div>
        )
  
}

export default ChatMessage;