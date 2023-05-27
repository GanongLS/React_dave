import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import initialPost from "./pages/initialPost";

const Root = () => {
	const [posts, setPosts] = useState(initialPost);
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const handleDelete = id => {
		// console.log({ id });
		let newPosts = posts.filter(post => {
			return post.id.toString() !== id.toString();
		});
		// console.log({ newPosts });
		setPosts(newPosts);
	};

	const handleSubmitNewPost = ({ title, body }) => {
		let date = format(new Date(), "MMMM dd, yyyy pp");
		// let _date = date.toISOString();
		let newPost = {
			id: posts.length > 0 ? posts.length + 1 : 1,
			title,
			datetime: date,
			body,
		};

		setPosts(posts => [...posts, newPost]);
	};

	useEffect(() => {
		let searchedResult = posts.filter(post => {
			let title = post.title.toLowerCase().includes(search.toLowerCase());
			let body = post.body.toLowerCase().includes(search.toLowerCase());
			return title || body;
		});
		setSearchResult(searchedResult);
		return () => {
			setSearchResult(posts);
		};
	}, [posts, search]);

	const routerFirst = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={
					<App
						search={search}
						setSearch={setSearch}
					/>
				}>
				<Route
					index
					element={<Home posts={searchResult} />}
				/>
				<Route
					path="dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="about"
					element={<AboutUs />}
				/>

				<Route
					path="post"
					element={<NewPost handleSubmit={handleSubmitNewPost} />}
				/>
				<Route
					path="post/:id"
					element={
						<PostPage
							posts={posts}
							handleDelete={handleDelete}
						/>
					}
				/>
				<Route
					path="*"
					element={<Missing />}
				/>
			</Route>
		)
	);

	return <RouterProvider router={routerFirst} />;
};

export default Root;
