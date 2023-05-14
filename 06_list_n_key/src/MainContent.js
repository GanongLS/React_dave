import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const MainContent = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			item: "One half pound bag of Cocoa Covered Almonds Unsalted",
		},
		{
			id: 2,
			checked: false,
			item: "Item 2",
		},
		{
			id: 3,
			checked: false,
			item: "Item 3",
		},
	]);

	const handleClick = (id) => {
		const newItems = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		setItems(newItems);
		localStorage.setItem("shoppingList", JSON.stringify(newItems)); //localStorage bertahan selama webbrowser masih terinstall. sessionStorage bertahan selama web masih terakses.
	};
	const handleDelete = (id) => {
		const newItems = items.filter((item) => {
			return item.id !== id;
		});
		setItems(newItems);
		localStorage.setItem("shoppingList", JSON.stringify(newItems));
	};

	return (
		<main>
			{items.length ? (
				<ul>
					{items.map((i) => (
						<li
							className="item"
							key={i.id.toString()}
							onDoubleClick={() => {
								handleClick(i.id);
							}}>
							<input
								type="checkbox"
								checked={i.checked}
								onChange={() => {
									handleClick(i.id);
								}}
							/>
							<label
								htmlFor=""
								// style={{ textDecoration: "line-through" }}
								style={i.checked ? { textDecoration: "line-through" } : null}>
								{i.item}
							</label>
							<FaTrashAlt
								onClick={() => {
									handleDelete(i.id);
								}}
								role="button"
								tabIndex="0"
							/>
						</li>
					))}
				</ul>
			) : (
				<p style={{ marginTop: "2rem" }}>Tidak ada shopping list</p>
			)}
		</main>
	);
};

export default MainContent;
