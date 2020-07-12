import React from "react";

import "./Header.css";

function Header(props) {
  console.log(props);
  // console.log(props.currentUser);

  return <header>{props.participants.map(participant => {
    let participantAvatar = participant.avatar;
    if (participant !== props.currentUser) {
      return (
          
          <div className='header-container'>
            <img className='header-avatar' src={participantAvatar} />
            <div className='header-username'>{participant.username}</div>
          </div>
      )
    }})}</header>;
}

export default Header;
