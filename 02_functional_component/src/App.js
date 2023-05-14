import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
	const name = "Luki Subandi";

	return (
		<div className="App">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
