import React from "react";
import "./ChatMessage.css";

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

export default ReceivedMessage;
