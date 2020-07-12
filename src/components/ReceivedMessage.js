import React from 'react';

function ReceivedMessage(props) {
console.log(props);
// return{
//   <div>Received</div>
// }  

return (
  <div className='chatWrapperReceived'>
    <img className="avatar" alt="avatar" src= {props.message.user.avatar}/>
    <div className="bodyWrapper">
      <div className="name">{props.message.user.username}</div>
      <div className="chat-message" >{props.message.body}</div>
    </div>
  </div>)

}

export default ReceivedMessage