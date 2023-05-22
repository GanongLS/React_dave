import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		console.log("refresh called!");
		const response = await axios.get("/refresh", {
			withCredentials: true,
		});
		console.log("refresh()", { response });
		setAuth(prev => {
			console.log(JSON.stringify(prev));
			console.log(response.data.accessToken);
			return {
				...prev,
				roles: response.data.roles,
				accessToken: response.data.accessToken,
			};
		});
		return response.data.accessToken;
	};
	return refresh;
};

export default useRefreshToken;
