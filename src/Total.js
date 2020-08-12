import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Total = ({ products }) => {
	const [ total, setTotal ] = useState(0);
	const cart = useSelector((state) => state.cart);
	useEffect(
		() => {
			let newTotal = cart.items.reduce((acc, id) => {
				return acc + products[id].price;
			}, 0);
			setTotal(newTotal);
		},
		[ cart, products ]
	);
	return (
		<Link to="/cart">
			<p>
				Cart Total: ${total.toFixed(2)}{' '}
				<span>
					<i class="fas fa-shopping-cart" />
				</span>
			</p>
		</Link>
	);
};

export default Total;
