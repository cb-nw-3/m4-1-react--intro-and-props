import React from "react";

import "./ChatMessage.css";

function ChatMessage({ user, message, messageType }) {
  console.log(user, message, messageType);

  if (messageType === "sent") {
    return <SentMessage user={message.user} message={message} />;
  } else {
    return <ReceivedMessage message={message} />;
  }
}

function SentMessage(props) {
  console.log(props);
  return (
    <div className="chat-message">
      <div id="current-sender-message-box" className="message-box">
        <span className="current-sender-message-body">
          {props.message.body}
        </span>
      </div>
    </div>
  );
}

function ReceivedMessage(props) {
  console.log(props);
  return (
    <div className="chat-message">
      <div className="sender-box">{props.message.user.username}</div>
      <div className="message-box">
        <span>
          <img className="avatar-img" src={props.message.user.avatar} />
        </span>
        <span className="message-body">{props.message.body}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
