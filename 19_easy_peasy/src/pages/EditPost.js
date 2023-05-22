import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
	const handleEdit = useStoreActions(a => a.editPost);
	const { id } = useParams();
	const getPostById = useStoreState(s => s.getPostById);
	const post = getPostById(id);
	const [postTitle, setPostTitle] = useState(post?.title ?? "");
	const [postBody, setPostBody] = useState(post?.body ?? "");
	const navigate = useNavigate();

	useEffect(() => {
		if (post) {
			setPostTitle(post.title);
			setPostBody(post.body);
		}
	}, [post]);

	const handleEditPost = async e => {
		e.preventDefault();
		let date = format(new Date(), "MMMM dd, yyyy pp");
		try {
			const res = await handleEdit({ id, title: postTitle, body: postBody, datetime: date });
			if (res) {
				setPostTitle("");
				setPostBody("");
				navigate(`/post/${id}`);
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
