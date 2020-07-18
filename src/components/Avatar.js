import React from "react";

import "./Avatar.css";

function Avatar(props) {
  return (
    <img
      src={props.user.avatar}
      className="avatar"
      alt={`${props.user.username} avatar`}
    />
  );
}

export default Avatar;
