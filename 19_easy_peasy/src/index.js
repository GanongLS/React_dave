import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { StoreProvider } from "easy-peasy";
import store from "./easy_peasy/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<Root />
		</StoreProvider>
	</React.StrictMode>
);
