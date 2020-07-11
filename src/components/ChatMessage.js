import React from "react";
import "./ChatMessage.css";
import Avatar from "./Avatar";

const sentBubble = "/assets/tip-sent.svg";
const receivedBubble = "/assets/tip-received.svg";

function ChatMessageReceived({ message }) {
  return (
    <div className="chat-message-wrapper received">
      <Avatar user={message.user} size={35} />
      <div className="chat-message">
        <div className="sender"> {message.user.username}</div>
        <div className="message-body">
          {message.body}
          <img className="tip" src={receivedBubble} alt="tip of the bubble" />
        </div>
      </div>
    </div>
  );
}

function ChatMessageSent({ message }) {
  return (
    <div className="chat-message-wrapper sent">
      <div className="chat-message">
        <div className="message-body">
          {message.body}
          <img className="tip" src={sentBubble} alt="tip of the bubble" />
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ message, messageType }) {
  if (messageType === "sent") {
    return <ChatMessageSent message={message} />;
  } else {
    return <ChatMessageReceived message={message} />;
  }
}

export default ChatMessage;
