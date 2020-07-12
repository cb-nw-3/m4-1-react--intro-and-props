import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  console.log("PROPS OF CHATMESSAGE:", props);

  return (
    <div className="chat-message">
      <img src={props.message.user.avatar}></img>
      <div>{props.message.user.username}</div>
      <div>{props.message.body}</div>
    </div>
  );
}

export default ChatMessage;
