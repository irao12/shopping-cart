import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<Link to="/">
				<h1 className="logo">Store</h1>
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
				</ul>
			</nav>
		</div>
	);
}
