import React from "react";
import Feed from "../components/Feed";

const Home = ({ posts }) => {
	return (
		<main className="Home">
			{posts.length > 0 ? <Feed posts={posts} /> : <p style={{ marginTop: "2rem" }}>No posts to display.</p>}
		</main>
	);
};

export default Home;
