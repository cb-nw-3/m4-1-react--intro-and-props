import React from "react";

import ChatMessage from "./ChatMessage";
import "./ChatStream.css";

//
//Creating React elements (eg. `<ChatStream>`) is like calling a function, and props are like the _arguments_
function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messages.map((message) => {
        let messageType =
          message.user === props.currentUser ? "sent" : "received";
        return (
          <ChatMessage
            user={message.user}
            message={message}
            messageType={messageType}
          />
        );
      })}
    </section>
  );
}

export default ChatStream;
