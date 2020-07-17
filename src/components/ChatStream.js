import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream({messages, currentUser}) {

  // console.log(currentUser);
  return (<section className="chat-stream">
    {messages.map(message =>
    {
     
        return <ChatMessage message={message} currentUser= {currentUser} />;
    
        
      // return <div>{message.body}</div>;
    })}
    
    </section>
);
  }
export default ChatStream;
