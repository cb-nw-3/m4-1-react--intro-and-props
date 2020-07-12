import React from "react";

import "./SentMessage.css";

function SentMessage(props) {
  return (
    <div className="chat-message-sent">
      <div className="nameAndMessage-sent">
        <div className="message-sent">{props.message.body}</div>
      </div>
    </div>
  );
}

export default SentMessage;
