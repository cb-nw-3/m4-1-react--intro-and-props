import React from "react";

import "./ReceivedMessage.css";

function ReceivedMessage(props) {
  return (
    <div className="chat-message">
      <img alt="profile" src={props.message.user.avatar} />
      <div className="nameAndMessage">
        <img className="receivedTip" src="/assets/tip-received.svg" />
        <div className="name">{props.message.user.username}</div>
        <div className="message">{props.message.body}</div>
      </div>
    </div>
  );
}

export default ReceivedMessage;
