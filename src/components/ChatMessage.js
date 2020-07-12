import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    // console.log(props);
    let chatBodyClass;
    let chatAvatarClass;
    let chatContainerClass;
    let chatUsernameClass;
    let tipClass;
    let tipSrc;
    if (props.messageType === 'sent') {
        chatBodyClass = 'blue';
        chatAvatarClass = 'no-avatar';
        chatContainerClass = 'right';
        chatUsernameClass ='no-name';
        tipClass = 'tip-sent';
        tipSrc = '/assets/tip-sent.svg';
    } else {
        chatBodyClass = 'chat-body';
        chatAvatarClass = 'chat-avatar';
        chatContainerClass = 'chat-container';
        chatUsernameClass ='chat-username';
        tipClass = 'tip-received';
        tipSrc = '/assets/tip-received.svg';
    }
    return <div className='chat-message'>
        <img className={chatAvatarClass} src={props.user.avatar}/>
        <div className={chatContainerClass}>
            <div className={chatUsernameClass}>{props.user.username}</div>
            <div className={chatBodyClass}>{props.body}</div>
            <div><img className={tipClass} src={tipSrc} /></div>
        </div>
    </div>
}

export default ChatMessage;