import React from "react";

import Avatar from "./Avatar";

import "./Header.css";

function Header(props) {
  return (
    <header>
      {props.participants
        .filter((participant) => participant !== props.currentUser)
        .map((participant) => (
          <div className="participant">
            <Avatar user={participant} size={50} />
            <div className="participant-name">{participant.username}</div>
          </div>
        ))}
    </header>
  );
}

export default Header;
