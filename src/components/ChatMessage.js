import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  console.log("PROPS OF CHATMESSAGE:", props);

  return (
    <div
      className={
        props.currentUser.username === props.message.user.username
          ? "current-user-chat-message"
          : "chat-message"
      }
    >
      <img
        className={
          props.currentUser.username === props.message.user.username
            ? "current-user-avatar"
            : "user-avatar"
        }
        src={props.message.user.avatar}
      ></img>
      <div className="text">
        <div
          className={
            props.currentUser.username === props.message.user.username
              ? "current-user-username"
              : "user-username"
          }
        >
          <p
            className={
              props.currentUser.username === props.message.user.username
                ? "current-user-message-text"
                : "user-message-text"
            }
          >
            {props.message.user.username}
          </p>
        </div>
        <div
          className={
            props.currentUser.username === props.message.user.username
              ? "current-user-message"
              : "user-message"
          }
        >
          <p
            className={
              props.currentUser.username === props.message.user.username
                ? "current-user-message-text"
                : "user-message-text"
            }
          >
            {props.message.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
