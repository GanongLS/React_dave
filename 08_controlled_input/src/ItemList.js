import LineItem from "./LineItem";

const ItemList = ({ items, handleClick, handleDelete }) => {
	const _items = [...items];
	_items.sort((a, b) => b.id - a.id);
	return (
		<ul>
			{_items.map((i) => (
				<LineItem item={i} handleClick={handleClick} handleDelete={handleDelete} key={i.id.toString()} />
			))}
		</ul>
	);
};

export default ItemList;
