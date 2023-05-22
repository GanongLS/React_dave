import { useState, useRef, useEffect } from "react";

function App() {
	const [randomInput, setRandomInput] = useState("");
	const [seconds, setSeconds] = useState(0);

	const renders = useRef(0);
	const inputRef = useRef();
	const timerId = useRef();

	const handleChange = e => {
		setRandomInput(e.target.value);
		renders.current++;
	};

	const startTimer = () => {
		console.log("start");
		timerId.current = setInterval(() => {
			renders.current++;
			setSeconds(prev => prev + 1);
			console.log({
				renderCurent: renders.current,
				seconds,
			});
		}, 1000);
		inputRef.current.focus();
	};

	const stopTimer = () => {
		clearInterval(timerId.current);
		timerId.current = 0;
		inputRef.current.focus();
	};

	const resetTimer = () => {
		stopTimer();
		if (seconds) {
			renders.current++;
			setSeconds(0);
		}
		inputRef.current.focus();
	};

	useEffect(() => {
		console.log({ seconds });
	}, [seconds]);

	return (
		<main className="App">
			<input
				ref={inputRef}
				type="text"
				value={randomInput}
				placeholder="Random Input"
				onChange={handleChange}
			/>
			<p>Renders: {renders.current}</p>
			<br />
			<br />
			<section>
				<button onClick={startTimer}>Start</button>
				<button onClick={stopTimer}>Stop</button>
				<button onClick={resetTimer}>Reset</button>
			</section>
			<br />
			<br />
			<p>Seconds: {seconds}</p>
			<br />
			<br />
			<p>{randomInput}</p>
		</main>
	);
}

export default App;
