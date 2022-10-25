import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import products from "./products";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/">
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

export default App;
