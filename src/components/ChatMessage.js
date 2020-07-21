import React from 'react';
import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props);
    return( 
        <div className='chat-message'>
            <div>{props.message.user.username}</div>
            <img src={props.message.user.avatar} />
            <span>{props.message.body}</span>
        </div>
    )
}

export default ChatMessage;