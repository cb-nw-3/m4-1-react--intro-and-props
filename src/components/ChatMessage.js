import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props.message);
    return (<div className="chat-message">
        <div className="username">{props.message.user.username}</div>
        <div className="msgBox">
            <div className="avatarBox">
                <img className="avatarImg" src={props.message.user.avatar} />
            </div>
            <div className="msgBodyBox">{props.message.body}</div>
        </div>

    </div>)
}

export default ChatMessage;