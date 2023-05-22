import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PostPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const deletePost = useStoreActions(actions => actions.deletePost);
	const getPostById = useStoreState(state => state.getPostById);
	const post = getPostById(id);
	console.log({ post });

	const handleDelete = id => {
		deletePost(id);
		navigate("/");
	};

	return (
		<main className="PostPage">
			<article className="post">
				{post ? (
					<>
						<h2>{post.title}</h2>
						<p className="postDate"> {post.datetime}</p>
						<p className="postBody"> {post.body}</p>
						<Link to={`/edit/${id}`}>
							<button className="editButton">Edit Post</button>
						</Link>
						<button
							className="deleteButton"
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
