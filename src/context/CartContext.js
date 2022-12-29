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

	const incrementQuantity = (id) => {
		setCart((oldCart) => {
			const newCart = [...oldCart];
			for (let i = 0; i < newCart.length; i++) {
				const item = newCart[i];
				if (item.id === id) {
					const newItem = { ...item };
					newItem.quantity++;
					setTotalQuantity(totalQuantity + 1);
					newCart.splice(i, 1, newItem);
					break;
				}
			}
			return newCart;
		});
	};

	const decrementQuantity = (id) => {
		setCart((oldCart) => {
			const newCart = [...oldCart];
			for (let i = 0; i < newCart.length; i++) {
				const item = newCart[i];
				if (item.id === id && item.quantity - 1 >= 0) {
					const newItem = { ...item };
					newItem.quantity--;
					setTotalQuantity(totalQuantity - 1);
					newCart.splice(i, 1, newItem);
					break;
				}
			}
			return newCart;
		});
	};

	const removeFromCart = (id) => {
		const index = cart.findIndex((item) => item.id === id);
		console.log(index);
		setTotalQuantity(totalQuantity - cart[index].quantity);
		setCart((oldCart) => {
			const newCart = [...oldCart];
			newCart.splice(index, 1);
			return newCart;
		});
	};

	return (
		<Provider
			value={{
				cart,
				addToCart,
				incrementQuantity,
				decrementQuantity,
				removeFromCart,
				totalQuantity,
			}}
		>
			{children}
		</Provider>
	);
};

export { CartContext, CartProvider };
