import { useEffect, useState } from "react";

function App() {
	// const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		console.log("effect ran");
		let isMounted;
		const controller = new AbortController();
		const fetchUsers = async () => {
			// setIsLoading(true);
			isMounted = true;
			const signal = controller.signal;
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
				const json = await response.json();
				console.log(json);
			} catch (err) {
				console.log({ err });
			} finally {
				// setIsLoading(false);
				isMounted = false;
			}
		};

		fetchUsers();

		return () => {
			console.log("unmounted");
			// isLoading &&
			isMounted && controller.abort();
		};
	}, []);

	return <p></p>;
}

export default App;
