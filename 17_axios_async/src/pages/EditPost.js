import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPost = ({ posts, handleEdit }) => {
	const { id } = useParams();
	const post = posts.find(post => post.id.toString() === id);
	const [postTitle, setPostTitle] = useState(post?.title ?? "");
	const [postBody, setPostBody] = useState(post?.body ?? "");
	const navigate = useNavigate();

	useEffect(() => {
		if (post) {
			setPostTitle(post.title);
			setPostBody(post.body);
		}
	}, [id]);

	const handleEditPost = async e => {
		e.preventDefault();
		try {
			const res = await handleEdit({ id, title: postTitle, body: postBody });
			if (res) {
				setPostTitle("");
				setPostBody("");
				navigate("/");
			}
		} catch (err) {
			console.log({ err });
		}
	};
	return (
		<main className="NewPost">
			<h2>Edit Post</h2>
			{post ? (
				<form
					action=""
					className="newPostForm"
					onSubmit={handleEditPost}>
					<label htmlFor="postTitle">Title:</label>
					<input
						type="text"
						id="postTitle"
						required
						value={postTitle}
						onChange={e => setPostTitle(e.target.value)}
					/>
					<label htmlFor="postBody">Post:</label>
					<textarea
						// type="text"
						id="postBody"
						required
						value={postBody}
						onChange={e => setPostBody(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</form>
			) : (
				<>
					<h2>Post Not Found</h2>
					<p className="postDate"> Well, that's dissapointing.</p>
					<p className="postBody">
						<Link to="/">Visit Our Homepage</Link>
					</p>
				</>
			)}
		</main>
	);
};

export default EditPost;
