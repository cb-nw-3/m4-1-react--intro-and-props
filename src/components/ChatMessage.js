import React from 'react';

import './ChatMessage.css';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';


function ChatMessage(props) {
  if (props.messageType === 'sent') {
    return <SentMessage message={props} />;
  } else {
    return <ReceivedMessage message={props} />;
  }
}

// function ChatMessage(props) {
//   return (
//   <div className='chatWrapper'>
//     <img className="avatar" alt="avatar" src= {props.message.user.avatar}/>
//     <div className="bodyWrapper">
//       <div className="name">{props.message.user.username}</div>
//       <div className="chat-message" >{props.message.body}</div>
//     </div>
//   </div>)
// }

export default ChatMessage;