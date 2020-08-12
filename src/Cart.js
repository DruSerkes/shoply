import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Total from './Total';

const Cart = () => {
	const products = useSelector((state) => state.data.products);
	const cart = useSelector((state) => state.cart);
	console.log('cart === ', cart);
	const uniqueItems = new Set(cart.items);
	console.log('uniqueItems === ', uniqueItems);

	return (
		<div className="Cart">
			<h1>Cart</h1>
			<Total products={products} />
			<div className="Cart-Container">
				{Array.from(uniqueItems).map((item) => <ProductCard id={item} data={products[item]} />)}
			</div>
			<Link to="/">
				<button>Go Back</button>
			</Link>
		</div>
	);
};

export default Cart;
