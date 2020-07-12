import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  console.log("PROPS OF CHATMESSAGE:", props);

  return (
    <div className="chat-message">
      <img className="user-avatar" src={props.message.user.avatar}></img>
      <div className="text">
        <div className="user-username">{props.message.user.username}</div>
        <div className="user-message">{props.message.body}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
