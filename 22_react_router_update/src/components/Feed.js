import React from "react";
import PostView from "./PostView";

const Feed = ({ posts }) => {
	return (
		<div>
			{posts.map(post => (
				<PostView
					key={post.id}
					post={post}
				/>
			))}
		</div>
	);
};

export default Feed;
