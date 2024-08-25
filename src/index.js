import React from "react";
import ReactDOM from "react-dom/client";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

serviceWorker.register({
	onUpdate() {},
});
