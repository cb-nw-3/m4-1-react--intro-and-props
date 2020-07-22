import React from "react";

import "./ChatMessage.css";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

// keep this in chatmessage file snd create two subfiles with above
function ChatMessage(props) {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} user={props.message.user} />;
  } else {
    return (
      <ReceivedMessage message={props.message} user={props.message.user} />
    );
  }
}

export default ChatMessage;
