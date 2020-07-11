import React from "react";

import "./Avatar.css";

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.user.avatar}
      alt={`${props.user.username}'s Avatar'`}
      style={{ width: props.size, height: props.size }}
    />
  );
}

export default Avatar;
