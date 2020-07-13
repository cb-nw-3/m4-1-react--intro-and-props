import React from "react";

import "./Avatar.css";

function Avatar(props) {
  return (
    <img
      alt={`${props.user.username}`}
      src={props.user.avatar}
      className="avatar"
      style={{ width: props.size, height: props.size }}
    />
  );
}

export default Avatar;
