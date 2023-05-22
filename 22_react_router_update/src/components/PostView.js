import React from "react";
import { Link } from "react-router-dom";

const PostView = ({ post }) => {
	return (
		<article className="post">
			<Link to={`/post/${post.id}`}>
				<h2>{post.title}</h2>
				<p className="postDate">{post.datetime}</p>
			</Link>
			<p className="postBody">{post.body.length <= 25 ? post.body : `${post.body.substring(0, 23)}...`}</p>
		</article>
	);
};

export default PostView;
