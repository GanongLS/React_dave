import React from "react";
import names from "./nameList";

const MainContent = () => {
	let name = "";
	const handleNameChange = () => {
		const _int = Math.floor(Math.random() * names.length);
		const randomName = names[_int];
		name = randomName;
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
	};
	return (
		<main>
			<p>Hello {handleNameChange()}</p>
			<button
				onClick={() => {
					handleClick();
				}}>
				Click It
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
