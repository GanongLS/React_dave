import { useState } from "react";
import Input from "./Input";
// import Kotak from "./Kotak";
import Square from "./Square";

function App() {
	const [colorValue, setColorValue] = useState("");
	const [hexValue, setHexValue] = useState("");
	const [isDarkText, setIsDarkText] = useState(true);
	return (
		<div className="App">
			{/* <Kotak /> */}
			<Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} />
			<Input
				colorValue={colorValue}
				setColorValue={setColorValue}
				setHexValue={setHexValue}
				isDarkText={isDarkText}
				setIsDarkText={setIsDarkText}
			/>
		</div>
	);
}

export default App;
