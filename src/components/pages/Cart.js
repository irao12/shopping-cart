import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem";
import "./Cart.css";

export default function Cart() {
	const cartContext = useContext(CartContext);
	return (
		<div className="cart-page">
			<div className="cart-content">
				<h1 className="cart-heading">Your Cart</h1>
				{cartContext.cart.map((item, index) => {
					return <CartItem item={item} key={index} />;
				})}
				<button type="button" className="complete-order">
					Complete Order
				</button>
			</div>
		</div>
	);
}
