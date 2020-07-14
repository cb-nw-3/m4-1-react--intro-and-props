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
      {otherUsers.map((user, index) => {return (
        <div key={'div'+index} className = 'avatarWrapper'>
          <img key={'img'+index} src= {user.avatar} alt="avatar" className="headerAvatar"></img>
          <h2 key={'h2'+index}>{user.username}</h2>
        </div>
      )})}
    </header>
    );
}

export default Header;
