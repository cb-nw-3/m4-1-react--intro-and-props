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
      {otherUsers.map(user => {return (
        <div className = "avatarWrapper">
          <img src= {user.avatar} alt="avatar" className="headerAvatar"></img>
          <h2>{user.username}</h2>
        </div>
      )})}
    </header>
    );
}

export default Header;
