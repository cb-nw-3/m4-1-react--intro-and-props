import React from 'react';
import './ChatMessage.css';


function ChatMessage(props) {
    console.log(props.message);
    if (props.messageType === 'sent') {
      return <SentMessage message={props.message} />;
    } else {
      return <ReceivedMessage message={props.message} />;
    }
}

function ReceivedMessage(props) {
    console.log(props);
    return (
      <div className="received-message">
        {/* <div>
          <img className="avatar" src={props.message.user.avatar} alt="avatar"/>
        </div> */}
        <div>
          {/* <div classNam="username">{props.message.user.username}</div> */}
          <span className="bodyMessageReceived">{props.message.body}</span>
        </div>
      </div>
    );
}
  
function SentMessage(props) {
    console.log(props);
    return (
      <div className="sent-message">
        <div className="username">{props.message.user.username}</div>
        <span><img className="avatar" src={props.message.user.avatar} alt="avatar"></img></span>
        <span className="bodyMessage">{props.message.body}</span>
        
      </div>
    );
}
  


export default ChatMessage;