import React from "react";
// import children
import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";
//import parallel css
import "./App.css";

function App(props) {
  // props are objects that store key value pairs
  console.log("App props: ", props);
  return (
    <div className="wrapper">
      <Header
        currentUser={props.currentUser}
        participants={props.conversation.participants}
      />
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer />
    </div>
  );
}

export default App;
