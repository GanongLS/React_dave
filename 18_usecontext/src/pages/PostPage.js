import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import restAPI from "../api/posts";

const PostPage = () => {
	const { posts, setPosts } = useContext(DataContext);

	const handleDelete = async id => {
		try {
			await restAPI.delete(`/posts/${id}`);
			let newPosts = posts.filter(post => {
				return post.id.toString() !== id.toString();
			});
			setPosts(newPosts);
			return true;
		} catch (err) {
			console.log({ error: err.message });
			return false;
		}
	};

	const navigate = useNavigate();
	const { id } = useParams();
	const post = posts.find(post => post.id.toString() === id);
	console.log({ body: post?.body ?? "" });
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
