import LineItem from "./LineItem";

const ItemList = ({ items, handleClick, handleDelete }) => {
	return (
		<ul>
			{items.map((i) => (
				<LineItem item={i} handleClick={handleClick} handleDelete={handleDelete} key={i.id.toString()} />
			))}
		</ul>
	);
};

export default ItemList;
