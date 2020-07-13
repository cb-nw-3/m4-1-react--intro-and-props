import React from "react";

import "./Header.css";

import Avatar from './Avatar';

function Header(props) {
  // console.log(props.participants)
  return (
    <header>
      {props.participants
        .filter(participant => participant !== props.currentUser)
        .map(participant => (
          <div className="participant">
            <Avatar user={participant} />
            <div className="avatar-username">{participant.username}</div>
          </div>
        ))}

    </header>

  );
}

export default Header;
