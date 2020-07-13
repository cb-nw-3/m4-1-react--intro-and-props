import React from "react";

import Avatar from './Avatar';

import "./Header.css";

function Header(props) {
  console.log('Header', props.user)
  return <header>{
    props.user.map(user => {
      return <Avatar user={user} />
    })
  }</header>;
}

export default Header;
