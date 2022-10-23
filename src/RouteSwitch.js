import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import React from "react";

export default function RouteSwitch() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<App />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
