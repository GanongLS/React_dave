import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const Nav = () => {
	const navigate = useNavigate();
	const { search, setSearch } = useContext(DataContext);
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
