import React from 'react';

import './ChatMessage.css';

function SentMessage(props) {
    return (
        <div className="container-sent">
            <img className="container-image" src={props.message.user.avatar}/>
            <div className="container-text">
                <div className="chat-username">{props.message.user.username}</div>
                <div className="chat-message-sent">{props.message.body}</div>
            </div>
        </div>
    );
}

function ReceivedMessage(props) {
    return (
        <div className="container-received">
            <div className="container-text">
                <div className="chat-message-received">{props.message.body}</div>
            </div>
        </div> 
    );
}

function ChatMessage(props) {
    if (props.messageType === 'sent') {
        return <SentMessage message={props.message} />;
    } else {
        return <ReceivedMessage message={props.message} />;
    };
}

export default ChatMessage;
