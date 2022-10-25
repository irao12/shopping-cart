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
			<button className="add-to-cart-button">ADD TO CART</button>
		</div>
	);
};

export default Product;
