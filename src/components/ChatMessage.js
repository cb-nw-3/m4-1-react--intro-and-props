import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    return <>
        <div className="userName">
            {props.message.user.username}
        </div>
        <div class="user-message">
            <img src={props.message.user.avatar} className="avatar" />
            <div className="chat-message">
                {props.message.body}
            </div>
        </div>
    </>
}

export default ChatMessage;