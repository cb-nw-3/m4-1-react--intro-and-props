import React from "react";

import "./ChatMessage.css";

function SentMessage(props) {
  console.log(props);
  return (
    <div className="sent">
      <div>SentMessage</div>
      <div>{props.message.body}</div>
      <div>{props.message.timestamp}</div>
      <div>{props.user.username}</div>
      <img className="image" src={props.user.avatar} />
    </div>
  );
}

function ReceivedMessage(props) {
  console.log(props);
  return (
    <div className="received">
      <div>ReceivedMessage</div>
      <div>{props.message.body}</div>
      <div>{props.message.timestamp}</div>
      <div>{props.user.username}</div>
      <img className="image" src={props.user.avatar} />
    </div>
  );
}

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
