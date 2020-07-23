import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css";

function SentMessage(props) {
  return (
    <div className="chat-message-wrapper sent">
      <div className="chat-message">
        <div> {props.timestamp} </div>
        <div>{props.user.username}</div>
        <Avatar size={36} user={props.user} />
        <div className="chat-message">{props.body}</div>
      </div>
    </div>
  );
}

function ReceivedMessage(props) {
  return (
    <div className="chat-message-wrapper received">
      <div className="chat-message">
        <div> {props.timestamp} </div>
        <div>{props.user.username}</div>
        <Avatar size={36} user={props.user} />
        <div className="chat-message">{props.body}</div>
      </div>
    </div>
  );
}

function ChatMessage(props) {
  console.log(props); // {user, body}
  if (props.messageType === "sent") {
    return (
      <SentMessage
        user={props.user}
        body={props.body}
        timestamp={props.timestamp}
      />
    );
  } else {
    return (
      <ReceivedMessage
        user={props.user}
        body={props.body}
        timestamp={props.timestamp}
      />
    );
  }
}

export default ChatMessage;

//{
// if (props.messageType === "sent") {
//   return
