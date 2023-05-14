import React, { useState } from "react";

const Kotak = () => {
	const [color, setColor] = useState("");
	return (
		<>
			<div className="kotak" style={{ backgroundColor: `${color}` }}></div>
			<form action="" className="searchForm" onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="color">Warna</label>
				<input
					type="text"
					id="color"
					role="searchbox"
					placeholder="Masukkan warna"
					value={color}
					onChange={(e) => {
						setColor(e.target.value);
					}}
				/>
			</form>
		</>
	);
};

export default Kotak;
