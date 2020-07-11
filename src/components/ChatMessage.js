import React from 'react';

import './ChatMessage.css';

function ChatMessage({ message }) {
    console.log({ message });


    // return (
    //     <div className="chat-message-wrapper sent">
    //       <div className="chat-message">
    //         {props.message.body}
    //         <img
    //           alt=""
    //           role="presentation"
    //           className="tip"
    //           src={bubbleTipSentSrc}
    //         />
    //       </div>
    //     </div>
    //   );




    return (
        <div>

            <div className="chat-username">{message.user.username}</div>

            <div className="chat-avatar">{message.user.avatar}</div>


            <div className="chat-message">{message.body}</div>


        </div>
    );

}

export default ChatMessage;