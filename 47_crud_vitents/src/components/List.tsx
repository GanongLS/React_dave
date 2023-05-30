import { ReactNode } from "react";

interface ListProps<T> {
	items: T[];
	renderItem: (item: T) => ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>{renderItem(item)}</li>
			))}
		</ul>
	);
};
export default List;
