import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import restAPI from "./api/posts";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import useAxiosFetch from "./hooks/useAxiosFetch";

const Root = () => {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");

	useEffect(() => {
		setPosts(data);
		// console.log({ data });
	}, [data]);

	useEffect(() => {
		// console.log("triggered");
		let searchedResult = posts.filter(post => {
			let title = post.title.toLowerCase().includes(search.toLowerCase());
			let body = post.body.toLowerCase().includes(search.toLowerCase());
			return title || body;
		});
		searchedResult.sort((a, b) => b.id - a.id);
		setSearchResult(searchedResult);
	}, [posts, search, setPosts]);

	const handleDelete = async id => {
		// console.log({ id });
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

	const handleSubmitNewPost = async ({ title, body }) => {
		let date = format(new Date(), "MMMM dd, yyyy pp");

		let newPost = {
			id: posts.length > 0 ? posts.length + 1 : 1,
			title,
			datetime: date,
			body,
		};
		try {
			const response = await restAPI.post("/posts", newPost);
			setPosts(prev => [...prev, response.data]);
			return true;
		} catch (err) {
			console.log({ error: err.message });
			return false;
		}
	};

	const handleEditPost = async ({ id, title, body }) => {
		console.log({ id, title, body });
		let date = format(new Date(), "MMMM dd, yyyy pp");
		let updatedPost = {
			id: posts.length > 0 ? posts.length + 1 : 1,
			title,
			datetime: date,
			body,
		};
		try {
			const response = await restAPI.put(`/posts/${id}`, updatedPost);
			let newPosts = posts.map(post => (post.id == id ? { ...response.data } : post));
			setPosts(newPosts);
			return true;
		} catch (err) {
			console.log({ error: err.message });
			return false;
		}
	};

	const routerFromElement = createBrowserRouter(
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
					element={
						<Home
							posts={searchResult}
							fetchError={fetchError}
							isLoading={isLoading}
						/>
					}
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
					path="edit/:id"
					element={
						<EditPost
							posts={posts}
							handleEdit={handleEditPost}
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

	return <RouterProvider router={routerFromElement} />;
};

export default Root;
