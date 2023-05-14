import { useState } from "react";
import AddItem from "./AddItem";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import SearchItem from "./SearchItem";

function App() {
	const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")));
	const [search, setSearch] = useState("");

	const handleClick = (id) => {
		const newItems = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		setAndSaveItems(newItems);
	};

	const handleDelete = (id) => {
		const newItems = items.filter((item) => {
			return item.id !== id;
		});
		setAndSaveItems(newItems);
	};

	const handleAddItem = (e) => {
		console.log({ e: e.target[0].value });
		const newItem = {
			// id: items[items.length - 1].id + 1,
			id: items.length ? items[items.length - 1].id + 1 : 1,
			checked: false,
			item: e.target[0].value,
		};
		const newItems = [...items, newItem];
		setAndSaveItems(newItems);
	};

	const setAndSaveItems = (items) => {
		setItems(items);
		localStorage.setItem("shoppingList", JSON.stringify(items)); //localStorage bertahan selama webbrowser masih terinstall. sessionStorage bertahan selama web masih terakses.
	};

	return (
		<div className="App">
			<Header title="Groceries List" />
			<AddItem handleAddItem={handleAddItem} />
			<SearchItem search={search} setSearch={setSearch} />
			<MainContent
				items={items.filter((it) => {
					return it.item.toLowerCase().includes(search.toLowerCase());
				})}
				handleClick={handleClick}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
