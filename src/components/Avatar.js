import React from 'react';

import './Avatar.css';

function Avatar(props) {
  console.log('Avatar', props)
  return <div className="header-avatar">
    <img src={props.user.avatar} className="message-avatar" />
    <p className="header-avatar-name">{props.user.username}</p>
  </div>
}

export default Avatar;