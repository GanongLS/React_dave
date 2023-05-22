import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
	const posts = useStoreState(s => s.posts);
	const handleSubmit = useStoreActions(a => a.savePost);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const navigate = useNavigate();

	const handleSubmitNewPost = async e => {
		e.preventDefault();
		let date = format(new Date(), "MMMM dd, yyyy pp");
		let newPost = {
			id: posts.length > 0 ? posts.length + 1 : 1,
			title: postTitle,
			datetime: date,
			body: postBody,
		};
		try {
			const res = await handleSubmit(newPost);
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
			<h2>New Post</h2>
			<form
				action=""
				className="newPostForm"
				onSubmit={handleSubmitNewPost}>
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
		</main>
	);
};

export default NewPost;
