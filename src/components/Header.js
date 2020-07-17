import React from "react";

import "./Header.css";
import HeaderAvatar from "./HeaderAvatar";

function Header({ users, currentUser }) {

  console.log("Header");

   console.log(users.elaine);



  return (
  
  <header>
<div className="header-avatars">
        
        
      {
            Object.values(users).map(element => {
          if (element.username !== currentUser.username)
            {return<HeaderAvatar user={element} />;}

        })
      }
          </div>
  </header>
  );
}



// return (
//   <header>
//     {props.participants
//       .filter(participant => participant !== props.currentUser)
//       .map(participant => (
//         <div className="participant">
//           <Avatar size={48} user={participant} />
//           <div className="username">{participant.username}</div>
//         </div>
//       ))}
//   </header>
// );


export default Header;
