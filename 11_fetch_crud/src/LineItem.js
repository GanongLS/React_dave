import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item: i, handleClick, handleDelete }) => {
	return (
		<li className="item">
			<input
				type="checkbox"
				checked={i.checked}
				onChange={() => {
					handleClick(i.id);
				}}
			/>
			<label
				htmlFor=""
				style={i.checked ? { textDecoration: "line-through" } : null}
				onClick={() => {
					handleClick(i.id);
				}}>
				{i.item}
			</label>
			<FaTrashAlt
				onClick={() => {
					handleDelete(i.id);
				}}
				role="button"
				tabIndex="0"
				aria-label={`Delete ${i.item}`}
			/>
		</li>
	);
};

export default LineItem;
