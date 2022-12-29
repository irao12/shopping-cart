import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../products";
import "./CartItem.css";

export default function CartItem({ item }) {
	const cartContext = useContext(CartContext);
	return (
		<div className="cart-item">
			<img src={products[item.id].img}></img>
			<div className="item-info">
				<h1>{products[item.id].name}</h1>
				<div className="item-quantity">
					<button
						type="button"
						className="decrement quantity-button"
						onClick={() => {
							cartContext.decrementQuantity(item.id);
						}}
					>
						-
					</button>
					<input
						type="number"
						max={10}
						value={item.quantity}
						onChange={() => {}}
					></input>
					<button
						type="button"
						className="increment quantity-button"
						onClick={() => {
							cartContext.incrementQuantity(item.id);
						}}
					>
						+
					</button>
				</div>
				<button
					className="cart-remove"
					type="button"
					onClick={() => cartContext.removeFromCart(item.id)}
				>
					Remove From Cart
				</button>
			</div>
		</div>
	);
}
