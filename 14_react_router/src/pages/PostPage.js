import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const post = posts.find(post => post.id.toString() === id);
	return (
		<main className="PostPage">
			<article className="post">
				{post ? (
					<>
						<h2>{post.title}</h2>
						<p className="postDate"> {post.datetime}</p>
						<p className="postBody"> {post.body}</p>
						<button
							onClick={() => {
								handleDelete(post.id);
								navigate("/");
							}}>
							Delete Post
						</button>
					</>
				) : (
					<>
						<h2>Post Not Found</h2>
						<p className="postDate"> Well, that's dissapointing.</p>
						<p className="postBody">
							<Link to="/">Visit Our Homepage</Link>
						</p>
					</>
				)}
			</article>
		</main>
	);
};

export default PostPage;
