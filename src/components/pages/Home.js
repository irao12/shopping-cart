import React from "react";
import "./Home.css";
import Pokeball from "../../images/pokeball.png";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home-page">
			<h1>PokePlush Store</h1>
			<img className="pokeball" src={Pokeball} alt="pokeball" />
			<Link to="./catalog">
				<button className="shop-button">SHOP NOW</button>
			</Link>
		</div>
	);
}
