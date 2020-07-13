import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
  console.log('ChatMessage', props);
  if (props.messageType === 'sent') {
    return <MessageSent messages={props} />;
  } else {
    return <MessageReceived messages={props} />;
  }
}

function MessageSent(props) {
  console.log('MessageSent', props)
  return <div className="chat-message-sent">
    <img src={props.messages.user.avatar} className="message-avatar" />
    <div className="message-body">
      <img className="tip-sent" src="/assets/tip-sent.svg" />
      <p className="message-sent">{props.messages.body}</p>
    </div>
  </div>;

}

function MessageReceived(props) {
  console.log('MessageReceived', props)
  return <div className="chat-message-received">
    <img src={props.messages.user.avatar} className="message-avatar" />
    <div className="message-body">
      <p className="username">{props.messages.user.username}</p>
      <div className="message-bubble">
        <img className="tip-received" src="/assets/tip-received.svg" />
        <p className="message-received">{props.messages.body}</p>
      </div>
    </div>
  </div>;

}

export default ChatMessage;