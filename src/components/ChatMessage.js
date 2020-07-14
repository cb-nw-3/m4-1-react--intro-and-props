import React from 'react';

import './ChatMessage.css';

function SentMessage(props) {
    console.log(props);
    return (<div className="chat-message">

        <div className="msgBox">

            <div className="myMsgBodyBox">{props.message.body}</div>
        </div>

    </div>)
}

function ReceivedMessage(props) {
    return (<div className="chat-message">
        <div className="username">{props.message.user.username}</div>
        <div className="msgBox">
            <div className="avatarBox">
                <img className="avatarImg" src={props.message.user.avatar} />
            </div>
            <div className="otherMsgBodyBox">{props.message.body}</div>
        </div>

    </div>)
}

function ChatMessage(props) {
    if (props.messageType === 'sent') {
        return <SentMessage message={props.message} />
    } else {
        return <ReceivedMessage message={props.message} />
    }
}

export default ChatMessage;