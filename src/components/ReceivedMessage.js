import React from "react";
import "./ChatMessage.css";

const ReceivedMessage = (props) => {
  console.log(props);
  return (
    <div>
      <div className="message-wrapper">
        <div className="image-container">
          <img className="chat-image" src={props.avatar} />
        </div>
        <div>
          <span className="chat-name">{props.user}</span>
          <div className="chat-message">{props.message}</div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
