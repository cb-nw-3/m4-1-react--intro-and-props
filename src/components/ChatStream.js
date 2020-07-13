import React from "react";
import ChatMessage from "./ChatMessage";

import "./ChatStream.css";

function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messages.map((msg) => {
        let messageType;
        if (msg.user === props.currentUser) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        return (
          <ChatMessage
            message={msg.body}
            user={msg.user.username}
            avatar={msg.user.avatar}
            messageType={messageType}
          />
        );
      })}
    </section>
  );
}

export default ChatStream;
