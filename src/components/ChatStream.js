import React from 'react';

import ChatMessage from "./ChatMessage";

import './ChatStream.css';


// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  
  return (
    <section className="chat-stream">
      {props.messages.map(message => {
        let messageType = undefined;
        if (message.user === props.currentUser) {
          messageType = 'sent';
        } else {
          messageType = 'received';
        }
        console.log(message);
        return (
          
          <ChatMessage
            message = {message}
            user={message.user}
            avatar={message.user.avatar}
            body={message.body}
            messageType={messageType}
            key={message.id} />
            
        );
      })}
    </section>
  );
}

export default ChatStream;
