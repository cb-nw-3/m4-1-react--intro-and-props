import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css"

const PartisipantList = ({ currentUser, partisipants }) => {
	const filteredPartisipants = partisipants.filter((user) => {
		if (user.username !== currentUser.username) {
			return true;
		}
	});
	return (
		<div className="headerIcon">
			{filteredPartisipants.map((user) => {
				return <Avatar src={user.avatar} />;
			})}
		</div>
	);
};

export default PartisipantList;
