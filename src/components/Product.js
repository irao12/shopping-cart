import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Product.css";

const Product = ({ id, name, img, price }) => {
	const cartContext = useContext(CartContext);

	const [quantity, setQuantity] = useState(0);

	const handleChange = (e) => {
		setQuantity(e.target.value);
	};

	const incrementQuantity = () => {
		setQuantity((oldQuantity) => {
			return ++oldQuantity;
		});
	};

	const decrementQuantity = () => {
		setQuantity((oldQuantity) =>
			oldQuantity - 1 <= 0 ? 0 : oldQuantity - 1
		);
	};

	return (
		<div className="product">
			<img src={img} alt={name} />
			<div className="product-details">
				<h2>{name}</h2>
				<h3>${price}</h3>
			</div>
			<div className="quantity-selector">
				<button
					type="button"
					className="decrement quantity-button"
					onClick={decrementQuantity}
				>
					-
				</button>
				<input
					type="number"
					max={10}
					value={quantity}
					onChange={handleChange}
				></input>
				<button
					type="button"
					className="increment quantity-button"
					onClick={incrementQuantity}
				>
					+
				</button>
			</div>
			<button
				className="add-to-cart-button"
				onClick={() => cartContext.addToCart(id, quantity)}
			>
				ADD TO CART
			</button>
		</div>
	);
};

export default Product;
