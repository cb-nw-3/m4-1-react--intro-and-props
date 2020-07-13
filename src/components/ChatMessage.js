import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  if (props.messageType === "sent") {
    return <SentMessage message={props} />;
  } else {
    return <ReceivedMessage message={props} />;
  }
}

function ReceivedMessage(props) {
  return (
    <div className="received-message">
      <div>
        <img src={props.message.user.avatar} alt="user picture" />
      </div>
      <div>
        <small>{props.message.user.username}</small>
        <p>{props.message.body}</p>
      </div>
    </div>
  );
}

function SentMessage(props) {
  console.log(props);
  return (
    <div className="sent-message">
      <div>
        <small>{props.message.user.username}</small>
        <p>{props.message.body}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
