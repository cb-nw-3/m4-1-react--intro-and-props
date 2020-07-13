import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    return ( 
        <div className="container">
            <img className="container-image" src={props.message.user.avatar}/>
            <div className="container-text">
                <div className="chat-username">{props.message.user.username}</div>
                <div className="chat-message">{props.message.body}</div>
            </div>
        </div> 
    );
}

export default ChatMessage;
