import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const products = useSelector((state) => state.data.products);
	const cart = useSelector((state) => state.cart);
	console.log('cart === ', cart);
	const uniqueItems = new Set(cart.items);
	console.log('uniqueItems === ', uniqueItems);

	return <h1>Testing</h1>;
};

export default Cart;
