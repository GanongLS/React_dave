import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodo, getTodos } from "../../api/todosApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const [newTodo, setNewTodo] = useState("");
	const queryClient = useQueryClient();

	const {
		isLoading,
		isError,
		error,
		data: todos,
	} = useQuery("todos", getTodos, {
		select: data => data.sort((a, b) => b.id - a.id),
	});

	const addTodoMutation = useMutation(addTodo, {
		onSuccess: () => {
			// Invalidates cache and refetch
			queryClient.invalidateQueries("todos");
		},
	});

	const handleSubmit = e => {
		e.preventDefault();
		addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false });
		setNewTodo("");
	};

	const newItemSection = (
		<form onSubmit={handleSubmit}>
			<label htmlFor="new-todo">Enter a new todo item</label>
			<div className="new-todo">
				<input
					type="text"
					id="new-todo"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					placeholder="Enter new todo"
				/>
			</div>
			<button className="submit">
				<FontAwesomeIcon icon={faUpload} />
			</button>
		</form>
	);

	return (
		<main>
			<h1>Todo List</h1>
			{newItemSection}
			{isLoading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>{error.message}</p>
			) : (
				todos.map(todo => {
					return (
						<TodoItem
							key={todo.id}
							todo={todo}
						/>
					);
				})
			)}
		</main>
	);
};
export default TodoList;
