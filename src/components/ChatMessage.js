import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  if (props.messageType === "received") {
    return (
      <ReceivedMessage
        message={props.message}
        user={props.user}
        avatar={props.avatar}
      />
    );
  } else {
    return <SentMessage message={props.message} />;
  }
};

export default ChatMessage;
