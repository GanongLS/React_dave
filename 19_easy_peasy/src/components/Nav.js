import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();
	const posts = useStoreState(s => s.posts);
	const search = useStoreState(s => s.search);
	const setSearch = useStoreActions(a => a.setSearch);
	const setSearchResults = useStoreActions(a => a.setSearchResults);

	useEffect(() => {
		console.log("Nav useEffect triggered.");
		console.log({ posts });
		let searchedResult = posts.filter(post => {
			let title = post.title.toLowerCase().includes(search.toLowerCase());
			let body = post.body.toLowerCase().includes(search.toLowerCase());
			return title || body;
		});
		searchedResult.sort((a, b) => b.id - a.id);
		setSearchResults(searchedResult);
	}, [posts, search, setSearchResults]);
	return (
		<nav className="Nav">
			<form
				className="searchForm"
				onSubmit={e => {
					e.preventDefault();
				}}>
				<label htmlFor="search"></label>
				<input
					type="text"
					id="search"
					placeholder="Search Posts"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</form>
			<ul>
				<li onClick={() => navigate("/")}>
					<Link to="/">Home</Link>
				</li>
				<li onClick={() => navigate("/dashboard")}>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li onClick={() => navigate("/post")}>
					<Link to="/post">Posts</Link>
				</li>
				<li onClick={() => navigate("/about")}>
					<Link to="/about">About Us</Link>
				</li>
				<li onClick={() => navigate("/about")}>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
