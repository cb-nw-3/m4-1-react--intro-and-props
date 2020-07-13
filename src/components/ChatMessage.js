import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
  console.log('ChatMessage', props);
  if (props.messageType === 'sent') {
    return <MessageSent messages={props} />;
  } else {
    return <MessageReceived messages={props} />;
  }

  return <div className="chat-message">
    <img src={props.message.user.avatar} />
    <div className="message-body">
      <p className="username">{props.message.user.username}</p>
      
      <p className="message">{props.message.body}</p>
    </div>
  </div>;
}

function MessageSent(props) {
  console.log('MessageSent', props)
  return <div className="chat-message-sent">
    <img src={props.messages.user.avatar} />
    <div className="message-body">
      <p className="message-sent">{props.messages.body}</p>
    </div>
  </div>;

}

function MessageReceived(props) {
  console.log('MessageReceived', props)
  return <div className="chat-message-received">
    <img src={props.messages.user.avatar} />
    <div className="message-body">
      <p className="username">{props.messages.user.username}</p>
      <p className="message-received">{props.messages.body}</p>
    </div>
  </div>;

}

export default ChatMessage;