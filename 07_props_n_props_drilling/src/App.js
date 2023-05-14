import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
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
		<div className="App">
			<Header title="Groceries List" />
			<MainContent items={items} handleClick={handleClick} handleDelete={handleDelete} />
			<Footer length={items.length} />
		</div>
	);
}

export default App;
