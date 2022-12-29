import React from "react";
import "./Catalog.css";
import Product from "../Product";

export default function Catalog({ products }) {
	return (
		<div className="catalog">
			<h1>Catalog</h1>
			<div className="product-list">
				{products.map((product, index) => (
					<Product
						key={index}
						id={product.id}
						name={product.name}
						price={product.price}
						img={product.img}
					/>
				))}
			</div>
		</div>
	);
}
