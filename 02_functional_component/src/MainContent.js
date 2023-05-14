import React from "react";

const MainContent = () => {
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
		<main>
			<p>Hello {handleNameChange()}</p>
		</main>
	);
};

export default MainContent;
