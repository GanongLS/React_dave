import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useAxiosFetch = dataUrl => {
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const controller = new AbortController();

		const fetchData = async url => {
			setIsLoading(true);
			try {
				const response = await axios.get(url, {
					// cancelToken: source.token,
					signal: controller.signal,
				});
				if (isMounted) {
					setData(response.data);
					setFetchError(null);
				}
			} catch (err) {
				if (isMounted) {
					console.log({ err });
					setFetchError(err.message);
					setData([]);
				}
				if (err.code === "ERR_CANCELED") {
					console.log({ err });
				}
				// Your navigate
			} finally {
				// isMounted && setTimeout(() => setIsLoading(false), 2000);
				isMounted && setIsLoading(false);
			}
		};

		fetchData(dataUrl);

		const cleanUp = async () => {
			console.log("clean up called");
			isMounted = false;
			isLoading && controller.abort();
			// source.cancel();
		};

		return cleanUp;
	}, [dataUrl]);

	return { data, fetchError, isLoading };
};

export default useAxiosFetch;
