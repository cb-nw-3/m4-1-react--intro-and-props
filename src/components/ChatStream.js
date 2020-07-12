import React from "react";

import ChatMessage from "./ChatMessage";

import "./ChatStream.css";

function ChatStream(props) {
	console.log(props);
	return (
		<section className="chat-stream">
			{props.messages.map((message) => {
				props.messages.map((message) => {
					return <ChatMessage message={message} />	
				});

				return <div>{message.body}</div>;
			})}
		</section>
	);
}

export default ChatStream;
