import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import App from "./App";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import products from "./products";

export default function RouteSwitch() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />}></Route>
					<Route
						path="/catalog"
						element={<Catalog products={products} />}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
