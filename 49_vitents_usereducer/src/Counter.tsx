import { ReactNode, useReducer, ChangeEvent } from "react";

const initState = { count: 0, text: "" };

const enum ACTION_TYPE {
	INCREMENT = "increment",
	DECREMENT = "decrement",
	NEW_INPUT = "newInput",
}

type ReducerAction = {
	type: ACTION_TYPE;
	payload?: string;
};

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
	switch (action.type) {
		case ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 };
		case ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 };
		case ACTION_TYPE.NEW_INPUT:
			return { ...state, text: action.payload ?? "" };
		default:
			throw new Error("Unknown Action");
	}
};

type ChildrenType = {
	children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, initState);

	const increment = () => dispatch({ type: ACTION_TYPE.INCREMENT });
	const decrement = () => dispatch({ type: ACTION_TYPE.DECREMENT });
	const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: ACTION_TYPE.NEW_INPUT,
			payload: e.target.value,
		});
	};

	return (
		<>
			<h1>{children(state.count)}</h1>
			<div>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
			</div>
			<input type="text" onChange={handleTextInput} />
			<h2>{state.text}</h2>
		</>
	);
};
export default Counter;
