import { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);

	const addToCart = (id, quantity) => {
		let added = false;
		cart.forEach((item, index) => {
			if (item.id === id) {
				setCart((oldCart) => {
					const cartCopy = [...oldCart];
					cartCopy[index].quantity += quantity;
					setTotalQuantity(totalQuantity + quantity);
				});
				return;
			}
		});
		if (!added) {
			setCart((oldCart) => {
				const cartCopy = [...oldCart];
				cartCopy.push({ id: id, quantity: quantity });
				setTotalQuantity(totalQuantity + quantity);
				return cartCopy;
			});
		}
	};

	return (
		<Provider
			value={{
				cart,
				addToCart,
				totalQuantity,
			}}
		>
			{children}
		</Provider>
	);
};

export { CartContext, CartProvider };
