import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
// import ChatMessage from "./ChatMessage";
import Footer from "./Footer";

import "./App.css";

function App(props) {
	console.log("test");
	return (
		<div className="wrapper">
			<Header />
				<ChatStream messages={props.conversation.messages} />
			<Footer />
		</div>
	);
}

export default App;
