import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState();
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getUsers = async () => {
			setIsLoading(true);
			try {
				const response = await axiosPrivate.get("/users", {
					signal: controller.signal,
				});
				console.log(response.data);
				isMounted && setUsers(response.data);
			} catch (err) {
        console.error({ err });
				navigate("/login", { state: { from: location }, replace: true }); // ini harusnya kalau unauthorized aja. 
			} finally {
				setIsLoading(false);
			}
		};

		getUsers();

		const cleanUp = () => {
			isMounted = false;
			isLoading && controller.abort();
		};
		return cleanUp;
	}, []);

	return (
		<article>
			<h2>Users List</h2>
			{users?.length ? (
				<ul>
					{users.map((user, i) => (
						<li key={i}>{user?.username}</li>
					))}
				</ul>
			) : (
				<p>No users to display</p>
			)}
		</article>
	);
};

export default Users;
