import React from 'react';

import './ChatStream.css';

import ChatMessage from './ChatMessages';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  // console.log(props);
  return (
    <section className="chat-stream">
      {/* Maps over the each message from the selected object in a <div> tag. */}
      {props.messages.map((message) => {
        // return <div>{message.body}</div>; // No longer needed from part 1.
        // return <ChatMessage message={message} />; // No longer needed from part 2.
        let messageType;
        if (message.user.username === props.currentUser) {
          messageType = 'sent';
        } else {
          messageType = 'received';
        }
        // console.log(messageType);
        return (
          <ChatMessage
            message={message} // Added for Ex 3.
            // user={message.user} // Commented out for Ex 3.
            // body={message.body} // COmmented out for Ex 3.
            messageType={messageType}
          />
        );
      })}
    </section>
  );
}

export default ChatStream;
