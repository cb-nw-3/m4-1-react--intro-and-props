import React from "react";
import "./ChatMessage.css";
import Avatar from "./Avatar";

function ChatMessage(props) {
  let myMessage = props.currentUser.username;
  console.log(myMessage);
  if (myMessage === props.message.user.username) {
    return (
      <div className="chat-message-wrapper received">
        <Avatar size={24} user={props.message.user} />
        <div className="user">{props.message.user.username}</div>
        <div className="my-chat-message">{props.message.body}</div>
      </div>
    );
  } else {
    return (
      <div className="chat-message-wrapper received">
        <Avatar size={24} user={props.message.user} />
        <div className="user">{props.message.user.username}</div>
        <div className="chat-message">{props.message.body}</div>
      </div>
    );
  }
}
export default ChatMessage;
