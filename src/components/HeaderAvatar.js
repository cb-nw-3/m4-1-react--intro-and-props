import React from 'react';

import './HeaderAvatar.css';

function HeaderAvatar({ user }) {
        return (
            <div className ="individual-avatar">
                {user.username}
                    <img className="avatar-image" src={user.avatar} alt="talking head"></img>
                        </div>
                        
        );

}

export default HeaderAvatar;