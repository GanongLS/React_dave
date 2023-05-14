import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
	const hexNameConverter = (hexColor) => {
		if (hexColor?.length) {
			const hexNames = "0x" + hexColor.substring(1);
			console.log({ hexNames });
			const middleNumber = 0x800000;
			const yourNumber = parseInt(hexNames, 16);
			if (yourNumber > middleNumber) {
				setIsDarkText(true);
			} else {
				setIsDarkText(false);
			}

			console.log({ yourNumber });
			console.log({ gtM: yourNumber > middleNumber });
		}
	};
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<label>Add Color Name:</label>
			<input
				autoFocus
				type="text"
				placeholder="Add color name"
				required
				value={colorValue}
				onChange={(e) => {
					setColorValue(e.target.value);
					setHexValue(colorNames(e.target.value));
					hexNameConverter(colorNames(e.target.value));
				}}
			/>
			<button type="button" onClick={() => setIsDarkText(!isDarkText)}>
				Toggle Text Color
			</button>
		</form>
	);
};

export default Input;
