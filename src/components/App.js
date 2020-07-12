import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
 console.log(props);
  return (
    <div className="wrapper">
      <div>
        <Header 
        participants={props.conversation.participants}
        currentUser={props.currentUser[0]}/>
        <ChatStream 
        messages={props.conversation.messages}
        currentUser={props.currentUser[0]}/>
        <Footer />
      </div>
      <div>
        <Header 
        participants={props.conversation.participants}
        currentUser={props.currentUser[1]}/>
        <ChatStream 
        messages={props.conversation.messages}
        currentUser={props.currentUser[1]}/>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
