import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ handleSubmit }) => {
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const navigate = useNavigate();

	const handleSubmitNewPost = e => {
		e.preventDefault();
		handleSubmit({ title: postTitle, body: postBody });
		setPostTitle("");
		setPostBody("");
		navigate("/");
	};
	return (
		<main className="NewPost">
			<h2>NewPost</h2>
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
