import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css";

function SentMessage(props) {
  console.log(props);
  return (
    <div className="chat-message-sent">
      <div className="chat-message-sent-body">{props.message.body}</div>
    </div>
  );
}

function ReceivedMessage(props) {
  return (
    <div className="chat-message-received">
      <Avatar user={props.message.user} />
      <div className="chat-message-received-username-and-body">
        <div className="chat-message-received-username">
          {props.message.user.username}
        </div>
        <div className="chat-message-received-body">{props.message.body}</div>
      </div>
    </div>
  );
}

function ChatMessage(props) {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
}

export default ChatMessage;
