import React from "react";

import "./Header.css";
import users from "../data";

function Header(props) {
    return <header>{console.log(users.conversation.participants)}</header>;
}

export default Header;
