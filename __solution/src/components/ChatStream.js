import React from "react";

import ChatMessage from "./ChatMessage";

import "./ChatStream.css";

function ChatStream(props) {
	console.log("my props ", props);
	return (
		<div className="chat-stream">
			{props.messages.map((message) => (
				<ChatMessage
					messageType={message.user === props.currentUser ? "sent" : "received"}
					message={message.body}
					key={Math.floor(Math.random() * 100000001)}
				/>
			))}
		</div>
	);
}

export default ChatStream;
