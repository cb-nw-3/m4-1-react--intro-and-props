import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
  console.log(props)
  return <div className="chat-message">
    <img src={props.message.user.avatar} />
    <div className="message-body">
      <p className="username">{props.message.user.username}</p>
      <p className="message">{props.message.body}</p>
    </div>
  </div>;
}

export default ChatMessage;