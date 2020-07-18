import React from 'react';

import './ChatMessages.css';

// This is used to breakdown each message instead of a stream. Commented whole function out to compltete Exercice 3.
// function ChatMessage(props) {
//   console.log(props);

//   return (
//     <div className="chat-message">
//       {/*Added messages, avatar and username, ta a message container */}
//       {/* Commented out, from exercice 2 */}
//       {/* <h1>{props.message.user}</h1> */}
//       <h1>{props.user.username}</h1>
//       {/* Commented out, from exercice 2 */}
//       {/* <img src={props.message.user.avatar} /> */}
//       <img src={props.user.avatar} />
//       {/* Commented out, from exercice 2 */}
//       {/* <p>{props.message.body}</p> */}
//       <p>{props.body}</p>
//     </div>
//   );
// }

function SentMessage(props) {
  console.log(props);

  return (
    <div className="chat-message">
      {/*Added messages, avatar and username, ta a message container */}
      {/* Commented out, from exercice 2 */}
      {/* <h1>{props.message.user}</h1> */}
      <h1>{props.message.user.username}</h1>
      {/* Commented out, from exercice 2 */}
      {/* <img src={props.message.user.avatar} /> */}
      {/* Commented out, from exercice 2 */}
      {/* <p>{props.message.body}</p> */}
      <p>{props.message.body}</p>
    </div>
  );
}

function ReceivedMessage(props) {
  console.log(props);

  return (
    <div className="chat-message">
      {/*Added messages, avatar and username, ta a message container */}
      {/* Commented out, from exercice 2 */}
      {/* <h1>{props.message.user}</h1> */}
      <h1>{props.message.user.username}</h1>
      {/* Commented out, from exercice 2 */}
      {/* <img src={props.message.user.avatar} /> */}
      <img src={props.message.user.avatar} />
      {/* Commented out, from exercice 2 */}
      {/* <p>{props.message.body}</p> */}
      <p>{props.message.body}</p>
    </div>
  );
}

function ChatMessage(props) {
  console.log(props);
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
}

export default ChatMessage;
