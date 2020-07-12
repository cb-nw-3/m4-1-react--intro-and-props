import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    console.log('test', props);
    return (
    <div className="chat-message">
        <span>{props.messages.user.username}</span>
        <img src={props.messages.user.avatar} />
    </div>
    )
}

export default ChatMessage;