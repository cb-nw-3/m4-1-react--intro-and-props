import React from 'react';

import './ChatMessage.css';

function ChatMessage({ message, currentUser }) {
    // console.log({ message, currentUser });

    if (currentUser === message.user) {
        return (
            <div>
                <div className="messageFlex-current-user">
                    <div className="chat-message-current-user">{message.body}</div>

                    <img className="bluetip" src="assets/tip-sent.svg"></img>
                    </div>
            </div>
        );
    }
    else {

        return (
            <div>

                <div className="messageFlex">
                   
                    <div className="chat-avatar">
                        <img className="avatar-image" src={message.user.avatar} alt="talking head"></img></div>
                   
                    <div className="inner-flex">
                        <div className="chat-username">{message.user.username}</div>
                        <div className="recieved-message-speech-bubble">
                            <img className="greytip" src="assets/tip-received.svg"></img>
                            <div className="chat-message">{message.body}</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default ChatMessage;