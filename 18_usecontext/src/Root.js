import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";

const Root = () => {
	const routerFromElement = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<App />}>
				<Route
					index
					element={<Home />}
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
					element={<NewPost />}
				/>
				<Route
					path="post/:id"
					element={<PostPage />}
				/>
				<Route
					path="edit/:id"
					element={<EditPost />}
				/>
				<Route
					path="*"
					element={<Missing />}
				/>
			</Route>
		)
	);

	return (
		<DataProvider>
			<RouterProvider router={routerFromElement} />
		</DataProvider>
	);
};

export default Root;
