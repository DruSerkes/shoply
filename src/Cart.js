import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Total from './Total';
import './Cart.css';

const Cart = () => {
	const products = useSelector((state) => state.data.products);
	const cart = useSelector((state) => state.cart);
	const uniqueItems = new Set(cart.items);

	return (
		<div className="Cart">
			<h1>Cart</h1>
			<Total products={products} />
			<div className="Cart-Container">
				{Array.from(uniqueItems).map((item) => <ProductCard id={item} key={item} data={products[item]} />)}
			</div>
			<Link to="/" className="GO-BACK">
				<button>Go Back</button>
			</Link>
		</div>
	);
};

export default Cart;
