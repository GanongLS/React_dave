import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/useWindowSize";

function App({ search, setSearch }) {
	const { width } = useWindowSize();
	return (
		<div className="App">
			<Header
				title="React JS Blog"
				width={width}
			/>
			<Nav
				search={search}
				setSearch={setSearch}
			/>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
