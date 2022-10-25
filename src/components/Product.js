import React from "react";
import "./Product.css";

const Product = ({ name, img, price }) => {
	return (
		<div className="product">
			<img src={img} alt={name} />
			<div className="product-details">
				<h2>{name}</h2>
				<h3>${price}</h3>
			</div>
			<div className="quantity-selector">
				<button type="button" className="decrement quantity-button">
					-
				</button>
				<input type="number" max={10}></input>
				<button type="button" className="increment quantity-button">
					+
				</button>
			</div>
			<button className="add-to-cart-button">ADD TO CART</button>
		</div>
	);
};

export default Product;
