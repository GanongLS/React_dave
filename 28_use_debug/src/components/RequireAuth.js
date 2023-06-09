import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();
	// const navigate = useNavigate();

	return auth?.roles?.find(role => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate
			to="/unauthorized"
			state={{ from: location }}
			replace
		/>
	) : (
		<Navigate
			to="/login"
			state={{ from: location }}
			replace
		/>
	);
};

export default RequireAuth;
