import React from 'react';

import './HeaderAvatar.css';

function HeaderAvatar({ users, currentUser }) {
    
    users.forEach(element => {
       if (element.username !== currentUser.username)
       {
           
       } 
    });
    // console.log(users, currentUser);

}

export default HeaderAvatar;