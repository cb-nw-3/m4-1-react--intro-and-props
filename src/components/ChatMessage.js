import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
  return (
    <div className="chat-message">
      <img src={props.message.user.avatar} />
      <div className="chat-message__content">
        <h1>{props.message.user.username}</h1>
        <p>{props.message.body}</p>
      </div>
    </div>
    );
}

export default ChatMessage;