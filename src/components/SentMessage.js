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

export default SentMessage;
