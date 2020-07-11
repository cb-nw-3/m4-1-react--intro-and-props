import React from 'react';

import './ChatMessage.css';

function ChatMessage(props) {
    return <div className="chat-message">{props.body}</div>
}

export default ChatMessage;