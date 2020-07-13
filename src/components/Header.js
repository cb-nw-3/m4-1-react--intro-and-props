import React from "react";

import "./Header.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      {props.participants.map((member) => {
        if (member !== props.currentUser) {
          return (
            <div className="participant-wrapper">
              <img src={member.avatar} className="participant-image" />
              <h1 className="participant-name">{member.username}</h1>
            </div>
          );
        }
      })}
    </header>
  );
}

export default Header;
