import React from 'react';
import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props);
    return( 
        <div className='chat-message'>
            <div className='chat-name'>{props.message.user.username}</div>
            <div className='chat-text-wrapper'>
                <img className='avatar-picture' src={props.message.user.avatar} alt="The user's avatar"/>
                <span className='chat-text'>{props.message.body}</span>
            </div>
            
        </div>
    )
}

export default ChatMessage;