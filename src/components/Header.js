import React from "react";

import {users} from '../data';



import "./Header.css";



function Header(props) {
  const otherUsers=[] 
  for (const key in users) {
    if (users[key].username !== props.currentUser.username){
      otherUsers.push(users[key])
    }
 }

  return (
    <header>
      {otherUsers.map(user => {return (<img src= {user.avatar} alt="avatar" className="headerAvatar"></img>)})}
    </header>
    );
}

export default Header;
