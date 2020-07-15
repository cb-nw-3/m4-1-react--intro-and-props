import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  console.log(props);
  return (
    <div>
      <div>{props.message.body}</div>
      <div>{props.message.timestamp}</div>
    </div>
  );
}

export default ChatMessage;
