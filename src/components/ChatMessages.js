import React from "react";
import ReceivedMessage from "./receivedMessage";
import SentMessage from "./SentMessage";

function ChatMessage(props) {
  console.log("ChatMessage", props);
  if (props.messageType === "received") {
    console.log("WE ARE IN ");
    return <ReceivedMessage message={props.message} />;
  } else {
    return <SentMessage message={props.message} />;
  }
}

export default ChatMessage;
