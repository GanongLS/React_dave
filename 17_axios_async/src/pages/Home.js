import React from "react";
import Feed from "../components/Feed";

const Home = ({ posts, fetchError, isLoading }) => {
	return (
		<main className="Home">
			{isLoading ? (
				<p className="statusMsg">Loading posts...</p>
			) : fetchError ? (
				<p
					className="statusMsg"
					style={{ color: "red" }}>
					{fetchError}
				</p>
			) : posts.length > 0 ? (
				<Feed posts={posts} />
			) : (
				<p style={{ marginTop: "2rem" }}>No posts to display.</p>
			)}
		</main>
	);
};

export default Home;
