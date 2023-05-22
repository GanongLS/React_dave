import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./Root";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "about",
				element: <AboutUs />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
