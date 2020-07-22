import React from 'react';
import './ChatMessage.css';

function SentMessage(props){
    console.log('Sent message props:')
    console.log(props);
    return(
        <div className='sent-message-wrapper'>
            <div className='chat-name'>{props.message.user.username}</div>
            <div className='text-wrapper'>
                <img className='avatar-picture' src={props.message.user.avatar} alt="The user's avatar"/>
                <span className='text'>{props.message.body}</span>
            </div>
        </div>
    );
}

function ReceivedMessage(props) {
    console.log('received message pros:')
    console.log(props);
    return(
        <div className='received-message-wrapper'>
            <div className='chat-name'>{props.message.user.username}</div>
            <div className='text-wrapper'>
                <img className='avatar-picture' src={props.message.user.avatar} alt="The user's avatar"/>
                <span className='text'>{props.message.body}</span>
            </div>
        </div>
    );
}

function ChatMessage(props) {
    console.log('ChatMessage props:')
    console.log(props);
    if(props.messageType === 'sent'){
        return <SentMessage message={props.message} />;
    } else {
        return <ReceivedMessage message={props.message} />;
    }
}

export default ChatMessage;