import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const NewPost = () => {
	const { handleSubmitNewPost: handleSubmit } = useContext(DataContext);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const navigate = useNavigate();

	const handleSubmitNewPost = async e => {
		e.preventDefault();
		try {
			const res = await handleSubmit({ title: postTitle, body: postBody });
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
