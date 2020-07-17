import React from "react";

import "./ChatMessage.css";

function ChatMessage({ message }) {
  console.log(message);
  return (
    <div className="chat-message">
      <div className="sender-box">{message.user.username}</div>
      <div className="message-box">
        <span>
          <img className="avatar-img" src={message.user.avatar} />
        </span>
        <span className="message-body">{message.body}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
