import React from 'react';

import './ChatMessage.css';

const bubbleTipSentSrc = '/assets/tip-sent.svg';
const bubbleTipReceivedSrc = '/assets/tip-received.svg';

function SentMessage(props) {
  return (
    <div className="chat-message chat-message--sent">
      {/* <img src={props.message.user.avatar} /> */}
      <img className ='msg-tip' src={bubbleTipSentSrc}/>
      <div className="chat-message__content chat-message__content--sent">
        {/* <h1>{props.message.user.username}</h1> */}
        <p>{props.message.body}</p>
      </div>
    </div>
    );
}

function ReceivedMessage(props) {
  return (
    <div className="chat-message">
      <img src={props.message.user.avatar} />

      <div className="chat-message__content chat-message__content--recvd">
        <h1>{props.message.user.username}</h1>
        <div className="chat-message__content__inside">
          <p>{props.message.body}</p>
          <img className ='msg-tip--recvd' src={bubbleTipReceivedSrc}/>
        </div>
      </div>

    </div>
    );
}

function ChatMessage(props) {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
}



export default ChatMessage;

