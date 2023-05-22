import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<Header title="React JS Blog" />
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
