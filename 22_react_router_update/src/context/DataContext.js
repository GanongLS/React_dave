import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";
import restAPI from "../api/posts";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");

	useEffect(() => {
		setPosts(data);
	}, [data]);

	useEffect(() => {
		let searchedResult = posts.filter(post => {
			let title = post.title.toLowerCase().includes(search.toLowerCase());
			let body = post.body.toLowerCase().includes(search.toLowerCase());
			return title || body;
		});
		searchedResult.sort((a, b) => b.id - a.id);
		setSearchResult(searchedResult);
	}, [posts, search, setPosts]);

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
		let date = format(new Date(), "MMMM dd, yyyy pp");
		let updatedPost = {
			id: posts.length > 0 ? posts.length + 1 : 1,
			title,
			datetime: date,
			body,
		};
		try {
			const response = await restAPI.put(`/posts/${id}`, updatedPost);
			let newPosts = posts.map(post => (post.id.toString() === id.toString() ? { ...response.data } : post));
			setPosts(newPosts);
			return true;
		} catch (err) {
			console.log({ error: err.message });
			return false;
		}
	};
	return (
		<DataContext.Provider
			value={{
				search,
				setSearch,
				searchResult,
				fetchError,
				isLoading,
				handleSubmitNewPost,
				posts,
				setPosts,
				handleEditPost,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
