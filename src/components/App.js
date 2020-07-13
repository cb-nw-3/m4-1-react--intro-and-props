import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  console.log('App', props)
  let notCurrentUsers = props.conversation.participants.filter(element => {
    return element.username !== props.currentUser.username
  })
  return (
    <div className="wrapper">
      <Header user={notCurrentUsers} />
      <ChatStream messages={props.conversation.messages} currentUser={props.currentUser} />
      <Footer />
    </div>
  );
}

export default App;
