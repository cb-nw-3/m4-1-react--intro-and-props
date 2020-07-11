import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props);
    return <div className='chat-message'>
        <img className='chat-avatar' src={props.message.user.avatar}/>
        <div className='chat-container'>
            <div className='chat-username'>{props.message.user.username}</div>
            <div className='chat-body'>{props.message.body}</div>
        </div>
    </div>
}

export default ChatMessage;