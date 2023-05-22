import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
	const authValue = useContext(AuthContext);
	const { auth } = authValue;
	useDebugValue(auth, auth => (auth?.user ? "Logged In" : "Logged Out"));
	return authValue;
};

export default useAuth;
