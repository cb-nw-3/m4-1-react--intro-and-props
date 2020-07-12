import React from 'react';

function SentMessage(props) {
    console.log(props)
    return (
        <div className='chatWrapperSent'>
          <img className="avatar" alt="avatar" src= {props.message.user.avatar}/>
          <div className="bodyWrapper">
            <div className="name">{props.message.user.username}</div>
            <div className="chat-message-sent" >{props.message.body}</div>
          </div>
        </div>)
}

export default SentMessage