import React from "react";

import "./Header.css";

function Header(props) {
  console.log(props);
  const filtered = props.participants.filter((participant) => {
    return participant.username !== props.currentUser.username;
  });

  const display = filtered.map((user) => {
    return (
      <div>
        <img className="avatar" src={user.avatar} />
        <span>{user.username}</span>
      </div>
    );
  });
  return <div>{display}</div>;
}

export default Header;
