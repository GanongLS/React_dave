import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App({ search, setSearch }) {
	return (
		<div className="App">
			<Header title="React JS Blog" />
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
