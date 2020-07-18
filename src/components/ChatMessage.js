import React from "react";
import "./ChatMessage.css";

function ChatMessage(props) {
  return (
    <div className="chat-message">
      <div className="avatar">
        <img src={props.message.user.avatar}></img>
      </div>
      <div className="username">
        <div>{props.message.user.username}</div>
      </div>
      <div className="message">
        <div>{props.message.body}</div>
      </div>
    </div>
  );
  //   props.messages.map((message) => {
  //     return <ChatMessage message={message} />;
  //   });
}

export default ChatMessage;
