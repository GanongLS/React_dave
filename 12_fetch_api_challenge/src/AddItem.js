import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ handleAddItem }) => {
	const [newItem, setNewItem] = useState("");
	const inputRef = useRef("inputRef");

	const handleSubmit = (e) => {
		if (!newItem) console.log("empty");
		handleAddItem(e);
		setNewItem("");
		e.preventDefault();
	};
	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem"></label>
			<input
				type="text"
				autoFocus
				ref={inputRef}
				id="addItem"
				placeholder="Add Item"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;
