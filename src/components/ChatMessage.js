import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props);
    let chatBodyClass;
    if (props.messageType === 'sent') {
        chatBodyClass = 'blue';
    } else {
        chatBodyClass = 'chat-body';
    }
    return <div className='chat-message'>
        <img className='chat-avatar' src={props.user.avatar}/>
        <div className='chat-container'>
            <div className='chat-username'>{props.user.username}</div>
            <div className={chatBodyClass}>{props.body}</div>
        </div>
    </div>
}

export default ChatMessage;