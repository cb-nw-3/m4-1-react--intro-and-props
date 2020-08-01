import React from 'react';

function ReceivedMessage(props) {
// console.log(props);
// return{
//   <div>Received</div>
// }  

return (
  <div className='chatWrapperReceived'>
    <img className="avatar" alt="avatar" src= {props.message.user.avatar}/>
    <div className="messageWrapper">
      <div className="name">{props.message.user.username}</div>
      <div className="bodyWrapper">
        <img className= "tail-received" alt="tip" src="./assets/tip-received.svg"></img>
        <div className="chat-message" >{props.message.body}</div>
      </div>
    </div>
  </div>)

}

export default ReceivedMessage