import React, { useState } from "react";
import names from "./nameList";

const MainContent = () => {
	const [name, setName] = useState("Luki");
	const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const _int = Math.floor(Math.random() * names.length);
		const randomName = names[_int];

		setName(randomName);
		setCount((c) => c + 1);
		return randomName;
	};

	const handleClick = () => {
		console.log("clicked");
	};

	const handleClick2 = (name) => {
		console.log(`${name} clicked it.`);
	};

	const handleClick3 = (e) => {
		console.log({ e: e.target.innerText });
		handleNameChange();
	};
	return (
		<main>
			<p onDoubleClick={(e) => handleClick3(e)}>Hello {name}</p>
			<p>You click it {count} time</p>

			<button
				onClick={() => {
					handleNameChange();
				}}>
				Change Name
			</button>
			<button
				onClick={() => {
					handleClick2(name);
				}}>
				Click It 2
			</button>
			<button
				onClick={(e) => {
					handleClick3(e);
				}}>
				Click It 3
			</button>
		</main>
	);
};

export default MainContent;
