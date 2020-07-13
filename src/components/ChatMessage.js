import React from 'react';

import './ChatMessage.css';

import Avatar from './Avatar';

const bubbleSent = '/assets/tip-sent.svg';
const bubbleReceived = '/assets/tip-received.svg';

function SentMessage(props) {
    return (
        <div className="user-message sent">
            <div className="sent-message">{props.message.body}</div>
            <img src={bubbleSent} role="presentation" class="bubble" />
        </div>
    )
}

function ReceivedMessage(props) {
    return (
        <>
            <div className="userName">{props.message.user.username}</div>
            <div className="user-message received">
                <Avatar user={props.message.user} />
                <img src={bubbleReceived} role="presentation" class="bubble" />
                <div className="received-message">{props.message.body}</div>
            </div>
        </>
    );
}

function ChatMessage(props) {
    // console.log(props.user.avatar);
    if (props.messageType === 'sent') {
        return <SentMessage message={props} />;
    } else {
        return <ReceivedMessage message={props} />;
    }
}


export default ChatMessage;