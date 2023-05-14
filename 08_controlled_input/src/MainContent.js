import ItemList from "./ItemList";

const MainContent = ({ items, handleClick, handleDelete }) => {
	return (
		<main>
			{items.length ? (
				<ItemList items={items} handleClick={handleClick} handleDelete={handleDelete} />
			) : (
				<p style={{ marginTop: "2rem" }}>Tidak ada shopping list</p>
			)}
		</main>
	);
};

export default MainContent;
