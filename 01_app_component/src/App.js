import logo from "./logo.svg";
import "./App.css";

function App() {
	const name = "Luki Subandi";
	const handleNameChange = () => {
		const name = [
			"Adam",
			"Beti",
			"Cinta",
			"Dodi",
			"Erik",
			"Fino",
			"Ganjar",
			"Hendidi",
			"Indah",
			"Junjung",
			"Kemala",
			"Luki",
			"Monika",
			"Nung",
			"Ono",
			"Petrik",
			"Quraish",
			"Resti",
			"Sinta",
			"Spongebob",
			"Tuanku",
			"Umar",
			"Vindi",
			"Wendi",
			"Xinto",
			"Yohanes",
			"Zahra",
		];
		const _int = Math.floor(Math.random() * name.length);
		const randomName = name[_int];
		return randomName;
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hallo {handleNameChange()}</p>
			</header>
		</div>
	);
}

export default App;
