import ItemList from "./ItemList";

const MainContent = ({ items, handleClick, handleDelete }) => {
	return (
		<>
			{items.length ? (
				<ItemList items={items} handleClick={handleClick} handleDelete={handleDelete} />
			) : (
				<p style={{ marginTop: "2rem" }}>Tidak ada shopping list</p>
			)}
		</>
	);
};

export default MainContent;
