import React from "react";
import Avatar from "./Avatar";

const PartisipantList = ({ currentUser, partisipants }) => {
	const filteredPartisipants = partisipants.filter((user) => {
		if (user.username !== currentUser.username) {
			return true;
		}
	});
	return (
		<div>
			{filteredPartisipants.map((user) => {
				return <Avatar src={user.avatar} />;
			})}
		</div>
	);
};

export default PartisipantList;
