import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import SearchItem from "./SearchItem";
// import SearchItem from "../data/db.json";

function App() {
	const API_URL = "http://localhost:3300/ites";
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log("first");
		const fetchItems = async () => {
			try {
				const result = await fetch(API_URL);
				// console.log({ result });
				if (!result.ok) {
					setFetchError(result.error?.message ?? result.statusText ?? "Did not recieved expected data.");
				} else {
					const listItems = await result.json();
					// console.log("here", { listItems });
					setFetchError(null);
					setItems(listItems);
				}
			} catch (error) {
				setFetchError(error.message);
				// console.log({ errorStack: error.stack });
			} finally {
				setIsLoading(false);
			}
		};

		// fetchItems();
		setTimeout(() => {
			fetchItems();
		}, 400);
	}, []);

	useEffect(() => {
		localStorage.setItem("shoppingList", JSON.stringify(items)); //localStorage bertahan selama webbrowser masih terinstall. sessionStorage bertahan selama web masih terakses.
	}, [items]);

	const handleClick = (id) => {
		const newItems = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		setItems(newItems);
	};

	const handleDelete = (id) => {
		const newItems = items.filter((item) => {
			return item.id !== id;
		});
		setItems(newItems);
	};

	const handleAddItem = (e) => {
		// console.log({ e: e.target[0].value });
		const newItem = {
			id: items.length ? items[items.length - 1].id + 1 : 1,
			checked: false,
			item: e.target[0].value,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	return (
		<div className="App">
			<Header title="Groceries List" />
			<AddItem handleAddItem={handleAddItem} />
			<SearchItem search={search} setSearch={setSearch} />
			<main>
				{isLoading && <p>Loading Item...</p>}
				{fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<MainContent
						items={
							items.length
								? items.filter((it) => {
										return it.item.toLowerCase().includes(search.toLowerCase());
								  })
								: []
						}
						handleClick={handleClick}
						handleDelete={handleDelete}
					/>
				)}
			</main>

			<Footer length={items.length} />
		</div>
	);
}

export default App;
