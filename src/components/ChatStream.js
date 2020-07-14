import React from "react";

import ChatMessage from "./ChatMessage";

import "./ChatStream.css";

function ChatStream(props) {
	return (
		<section className="chat-stream">
			{props.messages.map(message => {
				let messageType;
				if (message.user === props.currentUser) {
					messageType = 'sent';
				} else {
					messageType = 'received';
				}
				
				return (
					<ChatMessage
					user={message.user}
					body={message.body}
					messageType={messageType}
				/>
				);
			})}
		</section>
	);
}

export default ChatStream;
