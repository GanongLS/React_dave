import React from "react";

const Footer = ({ length }) => {
	const today = new Date();
	return (
		<>
			<p>
				{length} List {length === 1 ? "item" : "items"}
			</p>
			<footer>
				<p>Copyright &copy; {today.getFullYear()}</p>
			</footer>
		</>
	);
};

export default Footer;
