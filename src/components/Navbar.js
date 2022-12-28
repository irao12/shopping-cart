import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	const cartContext = useContext(CartContext);

	return (
		<div className="navbar">
			<Link to="/">
				<h1 className="logo">PokePlush</h1>
			</Link>
			<nav>
				<ul>
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link" to="/catalog">
							Catalog
						</Link>
					</li>
					<li className="navbar-cart">
						<Link className="link" to="/cart">
							Cart
						</Link>
						<p className="cart-number">
							{cartContext.totalQuantity}
						</p>
					</li>
				</ul>
			</nav>
		</div>
	);
}
