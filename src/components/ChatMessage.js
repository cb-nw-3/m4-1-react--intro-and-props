import React from 'react';

import './ChatMessage.css';

function SentMessage(props) {
  return (
    <div className="chat-message chat-message--sent">
      {/* <img src={props.message.user.avatar} /> */}
      <div className="chat-message__content chat-message__content--sent">
        {/* <h1>{props.message.user.username}</h1> */}
        <p>{props.message.body}</p>
      </div>
    </div>
    );
}

function ReceivedMessage(props) {
  return (
    <div className="chat-message">
      <img src={props.message.user.avatar} />
      <div className="chat-message__content chat-message__content--recvd">
        <h1>{props.message.user.username}</h1>
        <p>{props.message.body}</p>
      </div>
    </div>
    );
}

function ChatMessage(props) {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
}



export default ChatMessage;

