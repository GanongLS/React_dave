import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<Heading title="Hello World!" />
			<Section title="Hello Asia">This is Asia</Section>
			<Counter setCount={setCount}>Count is {count}</Counter>
			<List
				items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
				renderItem={(item: string) => <span className="bold">{item}</span>}
			/>
		</>
	);
}

export default App;
