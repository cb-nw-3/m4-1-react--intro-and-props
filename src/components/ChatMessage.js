import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    console.log(props.message.user);
  return <div><img src= {props.message.user.avatar}/> <div>{props.message.user.username}</div><div className="chat-message" >{props.message.body}</div></div>;
}

export default ChatMessage;