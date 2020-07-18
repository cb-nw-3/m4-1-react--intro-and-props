import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  // console.log(props);
  return (
    <div className="wrapper">
      <Header />
      {/* This get the imported function "ChatStream". The messages that we need is taken from the "prop"*/}
      {/* Commented out as part of exercise 3 */}
      {/* <ChatStream messages={props.conversation.messages} /> */}
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser.username}
      />
      <Footer />
    </div>
  );
}

export default App;
