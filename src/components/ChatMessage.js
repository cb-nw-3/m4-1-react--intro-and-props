import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props);
    let chatBodyClass;
    let chatAvatarClass;
    let chatContainerClass;
    let chatUsernameClass;

    if (props.messageType === 'sent') {
        chatBodyClass = 'blue';
        chatAvatarClass = 'no-avatar';
        chatContainerClass = 'right';
        chatUsernameClass ='no-name'
    } else {
        chatBodyClass = 'chat-body';
        chatAvatarClass = 'chat-avatar';
        chatContainerClass = 'chat-container';
        chatUsernameClass ='chat-username';
    }
    return <div className='chat-message'>
        <img className={chatAvatarClass} src={props.user.avatar}/>
        <div className={chatContainerClass}>
            <div className={chatUsernameClass}>{props.user.username}</div>
            <div className={chatBodyClass}>{props.body}</div>
        </div>
    </div>
}

export default ChatMessage;