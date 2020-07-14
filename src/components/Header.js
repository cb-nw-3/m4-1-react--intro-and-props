import React from "react";

import "./Header.css";
import PartisipantList from "./ParticipantList";

function Header(props) {
  return( 
  <header><PartisipantList
    currentUser={props.currentUser}
    partisipants={props.partisipants}
  /></header>
  )
}

export default Header;
